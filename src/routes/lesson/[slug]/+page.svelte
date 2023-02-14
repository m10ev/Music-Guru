<script>
	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	import { enhance } from '$app/forms';

	export let count = form ? form.count : 0;
	let correct = form ? form.correct : 0;

	function onSelect() {
				document.getElementById('check').disabled = false;
			}

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	shuffle(data[count].options);
</script>

<html lang="">
	<body class="max-w-6xl mx-auto">
		<form method="POST" action="?/check">
			{#if form?.finish}
				{#if correct == count + 1}
				    <h1 class="text-6xl font-semibold justify-center flex mt-6">Test Score</h1>
					<div class="grid justify-center grid-cols-1 mt-12 border border-indigo-600 p-9 rounded-lg w-96x2">
						<h1 class="justify-center text-center text-6xl font-semibold text-green-500">{correct}/{count + 1}</h1>
						<p class="justifer-center text-center text-2xl ml-4 mr-4 p-4">Excellent. You are amazing!</p>
						<a href="https://music-guru.vercel.app/lessons" class="justify-end rounded-2xl border text-center bg-indigo-600 border-indigo-600">
							<p class="p-5 text-white font-semibold">Go to lessons page</p>
						</a>
					</div>
				{:else if correct > count - (count/100 * 25) }
				<h1 class="text-6xl font-semibold justify-center flex mt-6">Test Score</h1>
				<div class="grid justify-center grid-cols-1 mt-12 border border-indigo-600 p-9 rounded-lg w-96x2">
					<h1 class="justify-center text-center text-6xl font-semibold text-indigo-500">{correct}/{count + 1}</h1>
					<p class="justifer-center text-center text-2xl ml-4 mr-4 p-4">Good Job! You are doing great.</p>
					<a href="https://music-guru.vercel.app/lessons" class="justify-end rounded-2xl border text-center bg-indigo-600 border-indigo-600">
						<p class="p-5 text-white font-semibold">Go to lessons page</p>
					</a>
				</div>
				{:else if correct > count - (count/100 * 50)}
				<h1 class="text-6xl font-semibold justify-center flex mt-6">Test Score</h1>
				<div class="grid justify-center grid-cols-1 mt-12 border border-indigo-600 p-9 rounded-lg w-96x2">
					<h1 class="justify-center text-center text-6xl font-semibold text-yellow-500">{correct}/{count + 1}</h1>
					<p class="justifer-center text-center text-2xl ml-4 mr-4 p-4">Almost there. Keep practicing!</p>
					<a href="https://music-guru.vercel.app/lessons" class="justify-end rounded-2xl border text-center bg-indigo-600 border-indigo-600">
						<p class="p-5 text-white font-semibold">Go to lessons page</p>
					</a>
				</div>
				{:else}
				<h1 class="text-6xl font-semibold justify-center flex mt-6">Test Score</h1>
				<div class="grid justify-center grid-cols-1 mt-12 border border-indigo-600 p-9 rounded-lg w-96x2">
					<h1 class="justify-center text-center text-6xl font-semibold text-red-500">{correct}/{count + 1}</h1>
					<p class="justifer-center text-center text-2xl ml-4 mr-4 p-4">Maybe read the lesson again.</p>
					<a href="https://music-guru.vercel.app/lessons" class="justify-end rounded-2xl border text-center bg-indigo-600 border-indigo-600">
						<p class="p-5 text-white font-semibold">Go to lessons page</p>
					</a>
				</div>
				{/if}
			{:else}
			<div class="flex justify-center mt-12">
				<h1 class=" text-6xl text-center font-semibold">
					{data[count].question}
				</h1>
			</div>
			<!--debug--> 
			<input type="number" style="display: none;" bind:value={count} name="num" />
			<input type="number" style="display: none;" bind:value={correct} name="cor" />
			<p style="display: none;">{count < Object.keys(data).length - 1}</p>
			<p style="display: none;">data:{Object.keys(data).length}</p>
			<ul class="mt-12 grid grid-cols-2 gap-4 justify-center items-center" id="ull">
				<li>
					<div class="flex items-center">
						<input
							on:click={onSelect}
							disabled={form?.success || form?.failure}
							id="q1"
							type="radio"
							value={data[count].options[2]}
							name="question"
							class="hidden peer required"
						/>
						<label
							for="q1"
							class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
							>{data[count].options[2]}</label
						>
					</div>
				</li>
				<li>
					<div class="flex items-center">
						<input
							on:click={onSelect}
							disabled={form?.success || form?.failure}
							id="q2"
							type="radio"
							value={data[count].options[3]}
							name="question"
							class="hidden peer required"
						/>
						<label
							for="q2"
							class=" w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
							>{data[count].options[3]}</label
						>
					</div>
				</li>
				<li>
					<div class="flex items-center">
						<input
							on:click={onSelect}
							disabled={form?.success || form?.failure}
							id="q3"
							type="radio"
							value={data[count].options[1]}
							name="question"
							class="hidden peer required"
						/>
						<label
							for="q3"
							class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
							>{data[count].options[1]}</label
						>
					</div>
				</li>
				<li>
					<div class="flex items-center">
						<input
							on:click={onSelect}
							disabled={form?.success || form?.failure}
							id="q4"
							type="radio"
							value={data[count].options[0]}
							name="question"
							class="hidden peer required"
						/>
						<label
							for="q4"
							class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
							>{data[count].options[0]}</label
						>
					</div>
				</li>
			</ul>
			<div class="flex justify-center mt-12">
				<button
					id="check"
					disabled
					class="border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 w-32 hover:ring-sky-200 hover:outline-none focus:ring-sky-200 disabled:bg-sky-200 disabled:hover:ring-sky-100"
				>
					<p class="text-center text-4xl text-white">Check</p>
				</button>
			</div>
			{#if form?.success}
				<!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
				<div id="disp" class="justify-center flex mt-6 p-4 shadow rounded-lg w-full bg-green-400">
					<p class="text-4xl text-white flex items-center justify-center mb-6">
						Correct! You are doing great.
					</p>
					{#if count < Object.keys(data).length - 1}
						<button
							id="nxt"
							formaction="?/next"
							class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
							>Next Question</button
						>
					{:else}
						<button
							id="nxt"
							formaction="?/finish"
							class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
							>Finish</button>
					{/if}
				</div>
			{:else if form?.failure}
				<div id="dispW" class="justify-center flex mt-6 p-4 shadow rounded-lg w-full bg-red-400">
					<p class="text-4xl text-white flex items-center justify-center mb-6">
						Wrong. The answer is {data[count].answer}. Better luck next time.
					</p>
					{#if count < Object.keys(data).length - 1}
						<button
							id="nxt"
							formaction="?/next"
							class="flex flex-wrap items-center justify-end mb-6 text-white text-4xl font-semibold hover:underline"
							>Next Question</button
						>
					{:else}
						<button
							id="nxt"
							formaction="?/finish"
							class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
							>Finish</button
						>
					{/if}
				</div>
			{/if}
			{/if}
			
		</form>

		<script>
		</script>
	</body>
</html>
