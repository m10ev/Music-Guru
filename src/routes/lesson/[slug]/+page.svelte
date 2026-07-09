<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	// Component local state variables (stops arbitrary reactive re-running)
	let count = 0;
	let correct = 0;
	let selectedOption = null;
	let preparedQuestions = [];

	function shuffle(array) {
		let currentIndex = array.length, randomIndex;
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		return array;
	}

	// Lock the shuffle pass down to run EXACTLY ONCE when the page mounts
	onMount(() => {
		if (data?.questions) {
			preparedQuestions = data.questions.map(q => ({
				...q,
				shuffledOptions: shuffle([...q.options])
			}));
		}
	});

	// Sync counters safely from the form action updates without re-triggering shuffles
	$: if (form && form.count !== undefined) {
		// If the question index actually advanced, clean out the selection state
		if (form.count !== count) {
			selectedOption = null;
		}
		count = form.count;
	}
	$: if (form && form.correct !== undefined) {
		correct = form.correct;
	}

	$: currentQuestion = preparedQuestions[count] || (data?.questions ? data.questions[count] : null);
	$: options = currentQuestion?.shuffledOptions || currentQuestion?.options || [];

	$: scorePercent = (correct / (count + 1)) * 100;
	$: feedback = scorePercent === 100 
		? { text: "Excellent. You are amazing!", color: "text-emerald-500", shadow: "hover:shadow-emerald-400/20" }
		: scorePercent >= 75 
		? { text: "Good Job! You are doing great.", color: "text-indigo-500", shadow: "hover:shadow-indigo-400/20" }
		: scorePercent >= 50 
		? { text: "Almost there. Keep practicing!", color: "text-amber-500", shadow: "hover:shadow-amber-400/20" }
		: { text: "Maybe read the lesson again.", color: "text-rose-500", shadow: "hover:shadow-rose-400/20" };
</script>

<div class="max-w-4xl mx-auto mt-12 px-4 mb-20">
	<form 
		method="POST" 
		action="?/check" 
		use:enhance={() => {
			return async ({ update }) => {
				// Intercept default actions and run full update without input mutations
				await update({ reset: false });
			};
		}}
	>
		<input type="hidden" value={count} name="num" />
		<input type="hidden" value={correct} name="cor" />

		{#if form?.finish}
			<div class="text-center mb-12">
				<h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Test Score</h1>
				<div class="h-1 w-28 bg-indigo-500 rounded mx-auto mb-6" />
			</div>

			<div class="max-w-md mx-auto rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md transition-all duration-300 p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700/50 {feedback.shadow}">
				<h2 class="text-6xl font-extrabold mb-3 tracking-tight {feedback.color}">
					{correct}<span class="text-3xl text-gray-400 dark:text-gray-500 font-medium">/{count + 1}</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-8">
					{feedback.text}
				</p>
				
				<a
					href="/lessons"
					class="w-full text-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-indigo-400/30"
				>
					Go to lessons page
				</a>
			</div>
		{:else}
			<div class="text-center mb-8">
				<div class="flex justify-between items-center max-w-2xl mx-auto mb-4 px-2">
					<span class="tracking-widest text-indigo-500 dark:text-indigo-400 text-xs font-semibold uppercase">
						Question {count + 1} of {data.questions.length}
					</span>
				</div>
				<h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white max-w-3xl mx-auto leading-tight">
					{currentQuestion?.question}
				</h1>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
				{#each options as option}
					<label class="relative flex items-center p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent shadow-sm hover:shadow-indigo-400/20 cursor-pointer transition-all duration-200 group focus-within:ring-2 focus-within:ring-indigo-500/50">
						<input
							bind:group={selectedOption}
							disabled={form?.success || form?.failure}
							type="radio"
							value={option}
							name="question"
							class="h-5 w-5 text-indigo-600 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
						/>
						<span class="ml-4 text-base font-medium text-gray-800 dark:text-gray-200 select-none group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
							{option}
						</span>
					</label>
				{/each}
			</div>

			{#if !form?.success && !form?.failure}
				<div class="flex justify-center">
					<button
						type="submit"
						disabled={!selectedOption}
						class="px-8 py-3.5 rounded-2xl text-white font-semibold shadow-md transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-400/30 disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
					>
						Check Answer
					</button>
				</div>
			{/if}

			{#if form?.success}
				<div class="max-w-2xl mx-auto rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
					<div class="flex items-center gap-3">
						<span class="text-2xl" role="img" aria-label="Success">🎉</span>
						<p class="text-emerald-800 dark:text-emerald-300 font-semibold text-base">
							Correct! You are doing great.
						</p>
					</div>
					<button
						formaction={count < data.questions.length - 1 ? "?/next" : "?/finish"}
						class="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
					>
						{count < data.questions.length - 1 ? "Next Question" : "Finish"}
					</button>
				</div>
			{:else if form?.failure}
				<div class="max-w-2xl mx-auto rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
					<div class="flex items-center gap-3">
						<span class="text-2xl" role="img" aria-label="Incorrect">❌</span>
						<p class="text-rose-800 dark:text-rose-300 font-medium text-base">
							Wrong. The correct answer is <span class="font-bold underline text-rose-900 dark:text-rose-200">{currentQuestion?.answer}</span>.
						</p>
					</div>
					<button
						formaction={count < data.questions.length - 1 ? "?/next" : "?/finish"}
						class="w-full sm:w-auto px-6 py-2.5 bg-rose-600 text-white font-semibold rounded-xl hover:bg-rose-700 transition-colors shadow-sm"
					>
						{count < data.questions.length - 1 ? "Next Question" : "Finish"}
					</button>
				</div>
			{/if}
		{/if}
	</form>
</div>