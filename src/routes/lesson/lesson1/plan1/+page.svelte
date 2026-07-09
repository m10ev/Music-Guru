<script>
	function playNote(id) {
		const audio = document.getElementById(id);
		audio.currentTime = 0;
		audio.play();
	}

	const notes = [
		{
			id: 'wholeNote',
			img: '/whole.webp',
			name: 'Whole note',
			beats: '4 beats',
			desc: 'The longest of all notes is the whole note'
		},
		{
			id: 'halfNote',
			img: '/half.webp',
			name: 'Half note',
			beats: '2 beats',
			desc: 'The half note has half the duration of a whole'
		},
		{
			id: 'quarterNote',
			img: '/quater.webp',
			name: 'Quarter note',
			beats: '1 beat',
			desc: 'The quarter note is a fourth of a whole note'
		},
		{
			id: 'eighthNote',
			img: '/8th.webp',
			name: 'Eighth note',
			beats: '1/2 of a beat',
			desc: 'The eighth note is an eighth of a whole note'
		},
		{
			id: 'sixteenthNote',
			img: '/32th.webp',
			name: 'Sixteenth note',
			beats: '1/4 of a beat',
			desc: 'The sixteenth note is a sixteenth of a whole note'
		}
	];
</script>

<div class="max-w-4xl mx-auto mt-12 px-4 mb-20">
	<div class="text-center mb-12">
		<h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
			Lesson 1. Notes and Note Duration
		</h1>
		<div class="h-1 w-28 bg-indigo-500 rounded mx-auto mb-6" />
		<p class="max-w-2xl mx-auto text-gray-500 dark:text-gray-300 leading-relaxed">
			Hello there, our friend, welcome to our first lesson. Today we are going to learn about
			notes. You may have heard of notes, but do you know what they're used for? We can compare
			the importance of notes in music to that of letters in languages — how would you be able to
			read this if you didn't know the letters? So let's learn about notes.
		</p>
	</div>

	<p class="text-xl text-gray-700 dark:text-gray-200 text-center mb-12 leading-relaxed">
		In music, notes are a type of notation that mark the duration of a sound (a tone). They also
		have a duration that is measured in beats.
	</p>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
		{#each notes as note}
			<button
				onclick={() => playNote(note.id)}
				class="text-left rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-indigo-400/30 transition-all duration-300 p-6 flex flex-col items-center"
				aria-label="Play {note.name}"
			>
				<img
					src={note.img}
					alt={note.name}
					class="h-20 w-auto object-contain mb-6"
				/>
				<h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{note.name}</h2>
				<h3 class="tracking-widest text-indigo-500 dark:text-indigo-400 text-sm font-medium mb-3">
					{note.beats}
				</h3>
				<p class="text-sm text-gray-500 dark:text-gray-300 text-center leading-relaxed">
					{note.desc}
				</p>
			</button>
		{/each}
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8 mb-12">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
			Doing math with notes
		</h2>
		<p class="text-gray-700 dark:text-gray-200 leading-relaxed space-y-1">
			Notes are measured in beats. Now you will see how to use some math with notes.
		</p>
		<div class="mt-4 space-y-2 text-gray-700 dark:text-gray-200 leading-relaxed">
			<p>Whole note (4b.) = Half note (2b.) + Half note (2b.)</p>
			<p>Half note (2b.) = Quarter note (1b.) + Quarter note (1b.)</p>
			<p>Quarter note (1b.) = Eighth note (1/2b.) + Eighth note (1/2b.)</p>
			<p>
				Another example: Whole note (4b.) = Quarter note (1b.) + Quarter note (1b.) + Quarter
				note (1b.) + Quarter note (1b.)
			</p>
		</div>
		<p class="mt-6 text-gray-700 dark:text-gray-200 leading-relaxed">
			Every note with less duration than the quarter note has flags. A flag halves the duration
			of a note.
		</p>
		<p class="mt-2 text-gray-700 dark:text-gray-200 leading-relaxed">
			An eighth note has one flag — therefore, two eighth notes have the same duration as a
			quarter note. You can add more flags, but these types of notes are not as regularly used.
		</p>
	</div>

	<div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md p-8">
		<h2 class="text-center text-xl font-semibold text-gray-900 dark:text-white mb-4">New Words</h2>
		<ul class="text-gray-600 dark:text-gray-300 leading-relaxed space-y-1 list-none text-center">
			<li><span class="font-semibold text-gray-900 dark:text-white">Note</span> — notation mark in music representing the duration of a sound</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Duration</span> — the length of time each note is played for</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Beat</span> — a regularly repeated rhythm (unit for duration)</li>
			<li><span class="font-semibold text-gray-900 dark:text-white">Flag</span> — an element of a note</li>
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

<audio id="wholeNote" src="/audio/whole_note.ogg"></audio>
<audio id="halfNote" src="/audio/half_note.ogg"></audio>
<audio id="quarterNote" src="/audio/quarter_note.ogg"></audio>
<audio id="eighthNote" src="/audio/eighth_note.ogg"></audio>
<audio id="sixteenthNote" src="/audio/sixteenth.ogg"></audio>