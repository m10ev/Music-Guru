<script>
	function playTone(id) {
		const audio = document.getElementById(id);
		audio.currentTime = 0;
		audio.play();
	}

	const tones = [
		{ id: 'do', img: '/do.webp', name: 'C (Do)' },
		{ id: 're', img: '/re.webp', name: 'D (Re)' },
		{ id: 'mi', img: '/mi.webp', name: 'E (Mi)' },
		{ id: 'fa', img: '/fa.webp', name: 'F (Fa)' },
		{ id: 'sol', img: '/sol.webp', name: 'G (Sol)' },
		{ id: 'la', img: '/la.webp', name: 'A (La)' },
		{ id: 'si', img: '/si.webp', name: 'B/H (Si)' }
	];
</script>

<div class="max-w-4xl mx-auto mt-12 px-4 mb-20">
	<div class="text-center mb-12">
		<h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">Lesson 2. Tones</h1>
		<div class="h-1 w-28 bg-indigo-500 rounded mx-auto mb-6" />
		<p class="max-w-2xl mx-auto text-gray-500 dark:text-gray-300 leading-relaxed">
			And hello there, our friend. We are at an important moment of your journey in music —
			tones.
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">What is a tone</h2>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
			A "tone" is a constant sound with a certain frequency of oscillations.
		</p>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
			A musical tone is characterized by its
		</h2>
		<ul class="text-gray-700 dark:text-gray-200 leading-relaxed list-disc list-inside space-y-1">
			<li>Duration</li>
			<li>Pitch</li>
			<li>Timbre (the unique sound of each instrument or voice)</li>
			<li>Intensity (loudness)</li>
		</ul>
	</div>

	<div class="text-center mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
			Main tones written with notes
		</h2>
		<p class="text-indigo-500 dark:text-indigo-400 text-lg font-medium">
			C (Do) &nbsp;D (Re) &nbsp;E (Mi) &nbsp;F (Fa) &nbsp;G (Sol) &nbsp;A (La) &nbsp;B (Si)
		</p>
	</div>

	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
		{#each tones as tone}
			<button
				onclick={() => playTone(tone.id)}
				class="text-center rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-indigo-400/30 transition-all duration-300 p-4 flex flex-col items-center"
				aria-label="Play {tone.name}"
			>
				<div class="h-28 w-full rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center mb-4 overflow-hidden">
					<img
						src={tone.img}
						alt={tone.name}
						class="h-full w-full object-contain p-2"
					/>
				</div>
				<h3 class="text-gray-900 dark:text-white font-medium text-lg">{tone.name}</h3>
			</button>
		{/each}
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-12">
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed font-semibold mb-4">
			In the language of music theory, a step is the distance between tones. A half step, or
			semitone, is the smallest interval between tones. Tones such as E and F, or B and C, are a
			half step apart. Two half steps equal one whole step — the tones G and A, A and B, and C
			and D are one whole step apart.
		</p>
		<p class="text-gray-500 dark:text-gray-300 text-center tracking-wide">
			C (Do) — D (Re) — E (Mi) * F (Fa) — G (Sol) — A (La) — B (Si) * C (Do)
			<br />
			<span class="text-sm">* = semitone</span>
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8">
		<h2 class="text-center text-xl font-semibold text-gray-900 dark:text-white mb-4">New Words</h2>
		<ul class="text-gray-600 dark:text-gray-300 leading-relaxed space-y-1 list-none text-center">
			<li><span class="font-semibold text-gray-900 dark:text-white">Tone</span> — a constant sound with a certain frequency of oscillations</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Step</span> — the distance between tones or notes</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Timbre</span> — the unique sound of each instrument or voice</li>
		</ul>
	</div>

	<div class="flex justify-end mt-10">
		<a
			href="/lessons"
			class="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-indigo-400/30"
		>
			Go to lessons page
		</a>
	</div>
</div>

<audio id="do" src="/audio/do.ogg"></audio>
<audio id="re" src="/audio/re.ogg"></audio>
<audio id="mi" src="/audio/mi.ogg"></audio>
<audio id="fa" src="/audio/fa.ogg"></audio>
<audio id="sol" src="/audio/sol.ogg"></audio>
<audio id="la" src="/audio/la.ogg"></audio>
<audio id="si" src="/audio/si.ogg"></audio>