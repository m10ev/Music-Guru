<script>
	const timeSignatures = [
		{
			top: '4',
			bottom: '4',
			name: 'Common time',
			desc: '4 beats per measure, quarter note gets one beat. The most common time signature in music.'
		},
		{
			top: '3',
			bottom: '4',
			name: 'Waltz time',
			desc: '3 beats per measure, quarter note gets one beat. Gives music a rolling, dance-like feel.'
		},
		{
			top: '2',
			bottom: '4',
			name: 'March time',
			desc: '2 beats per measure, quarter note gets one beat. Common in marches and polkas.'
		},
		{
			top: '6',
			bottom: '8',
			name: 'Compound time',
			desc: '6 beats per measure, eighth note gets one beat. Often felt as 2 big beats split into 3.'
		}
	];
</script>

<div class="max-w-4xl mx-auto mt-12 px-4 mb-20">
	<div class="text-center mb-12">
		<h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
			Lesson 3. Time Signatures and Measures
		</h1>
		<div class="h-1 w-28 bg-indigo-500 rounded mx-auto mb-6" />
		<p class="max-w-2xl mx-auto text-gray-500 dark:text-gray-300 leading-relaxed">
			Welcome back, our friend. Now that you know about notes and tones, it's time to learn how
			music organizes them in time. Every piece of music is divided into small chunks called
			measures, and a time signature tells us exactly how those measures are built.
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-12">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What is a measure</h2>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
			A measure (also called a bar) is a small segment of time in a piece of music, marked off by
			vertical lines on the staff called bar lines. Each measure contains a fixed number of beats,
			decided by the time signature at the start of the piece.
		</p>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed">
			Think of measures like sentences in a paragraph: they break a long piece of music into
			consistent, easy-to-follow pieces, so performers can stay together and keep track of where
			they are.
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-12">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
			How to read a time signature
		</h2>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
			A time signature is written as two numbers stacked on top of each other, right after the
			clef at the beginning of a piece.
		</p>
		<div class="flex items-center justify-center gap-6 mb-6">
			<div class="flex flex-col items-center leading-none font-serif text-indigo-500 dark:text-indigo-400">
				<span class="text-5xl font-bold">4</span>
				<span class="text-5xl font-bold text-orange-500">4</span>
			</div>
			<ul class="text-gray-700 dark:text-gray-200 leading-relaxed list-disc list-inside space-y-2">
				<li><span class="font-semibold text-indigo-500 dark:text-indigo-400">Top number</span> — how many beats are in each measure</li>
				<li><span class="font-semibold text-orange-500">Bottom number</span> — which note value counts as one beat (4 = quarter note, 8 = eighth note)</li>
			</ul>
		</div>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed">
			So a 4/4 time signature means: 4 beats per measure, and a quarter note equals one beat. That
			also means a single measure of 4/4 can hold exactly one whole note, or two half notes, or
			four quarter notes — always adding up to 4 beats.
		</p>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
		{#each timeSignatures as sig}
			<div
				class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-indigo-400/30 transition-all duration-300 p-6 flex items-center gap-6"
			>
				<div class="flex flex-col items-center leading-none font-serif text-indigo-500 dark:text-indigo-400 w-16">
					<span class="text-4xl font-bold">{sig.top}</span>
					<span class="text-4xl font-bold text-orange-500">{sig.bottom}</span>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{sig.name}</h3>
					<p class="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">{sig.desc}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-12">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
			Doing math with measures
		</h2>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
			Since a measure's total beats are fixed by the time signature, we can check that a measure
			is "full" by adding up the notes inside it.
		</p>
		<div class="space-y-2 text-gray-700 dark:text-gray-200 leading-relaxed">
			<p>In 4/4 time: Quarter note (1b.) + Quarter note (1b.) + Half note (2b.) = 4 beats ✓</p>
			<p>In 3/4 time: Half note (2b.) + Quarter note (1b.) = 3 beats ✓</p>
			<p>In 2/4 time: Quarter note (1b.) + Eighth note (1/2b.) + Eighth note (1/2b.) = 2 beats ✓</p>
		</div>
		<p class="mt-6 text-gray-700 dark:text-gray-200 leading-relaxed">
			If the notes in a measure add up to more or less than the top number of beats, the measure
			is written incorrectly — every measure must add up exactly.
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8">
		<h2 class="text-center text-xl font-semibold text-gray-900 dark:text-white mb-4">New Words</h2>
		<ul class="text-gray-600 dark:text-gray-300 leading-relaxed space-y-1 list-none text-center">
			<li><span class="font-semibold text-gray-900 dark:text-white">Measure (bar)</span> — a segment of music containing a fixed number of beats</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Bar line</span> — a vertical line marking the end of a measure</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Time signature</span> — two stacked numbers showing beats per measure and which note equals one beat</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Common time</span> — another name for 4/4 time</li>
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
