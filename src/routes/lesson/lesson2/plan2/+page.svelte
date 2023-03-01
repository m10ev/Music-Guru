<script>
    function doN() {
		var audio = document.getElementById('do');
		audio.play();
	}
    function re() {
		var audio = document.getElementById('re');
		audio.play();
	}
    function mi() {
		var audio = document.getElementById('mi');
		audio.play();
	}
    function fa() {
		var audio = document.getElementById('fa');
		audio.play();
	}
    function sol() {
		var audio = document.getElementById('sol');
		audio.play();
	}
    function la() {
		var audio = document.getElementById('la');
		audio.play();
	}
    function si() {
		var audio = document.getElementById('si');
		audio.play();
	}
</script>
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
				Lesson 2. Tones
			</h1>
			<div class="h-1 w- bg-indigo-500" />
			<p class="lg:w-2/3 mx-auto leading-relaxed text-md mt-4">
				And hello, there our friend. We are at an important moment of your journey in music - tones.
			</p>

			<div class="justify-start">
				<h1 class="text-3xl mt-4 text-gray-900 flex text ">What is a note</h1>
				<p class="text-start ">
					A "tone" is a constant sound with a certain frequency of oscillations
				</p>
				<p class="text-2xl mt-4 text-gray-900 flex text-start">
					A musical tone is characterized by it's
				</p>
				<p class="text-start">
					- duration <br />- pitch <br />- timbre (the unique sound of each instrument or voice)
					<br />- intencity (loudnes)
				</p>
			</div>
			<h1 class="text-3xl mt-4 text-gray-900   ">Main tones written with notes</h1>
			<p class=" text-blue-600 text-lg">C (Do) D (Re) E (Mi) F (Fa) G (Sol) A (La) B (Si)</p>
		</div>
		<div class="container px-5 py-10  mx-auto">
			<div class="flex flex-wrap -m-4">
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={doN}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=" 01"
							class="object-cover object-center w-30 h-48 block "
							src="https://music-guru.vercel.app/do.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">C (Do)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={re}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30   h-48   block"
							src="https://music-guru.vercel.app/re.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">D (Re)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={mi}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30 h-48 block"
							src="https://music-guru.vercel.app/mi.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">E (Mi)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={fa}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30 h-48 block"
							src="https://music-guru.vercel.app/fa.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">F (Fa)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={sol}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30 h-48 block"
							src="https://music-guru.vercel.app/sol.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">G (Sol)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={la}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30 h-48 block"
							src="https://music-guru.vercel.app/la.webp"
						/>
                    </div>
					<div class="mt-4">
						<h2 class="text-gray-900 title-font text-lg font-medium">A (La)</h2>
					</div>
				</div>
				<div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-xl" on:click={si}>
					<div class="block relative h-48 rounded overflow-hidden">
						<img
							alt=""
							class="object-cover object-center w-30 h-48 block"
							src="https://music-guru.vercel.app/si.webp"
						/>
                    </div>
					<div class="mt-4 justify-end">
						<h2 class="text-gray-900 title-font text-lg font-medium">B/H (Si)</h2>
					</div>
				</div>
			</div>
		</div>

		<p class="font-bold">
			! In the language of music theory, a step is the distance between tones. A half step, or
			semitone, is the smallest interval between tones. Tones such as E and F or B and C, are a
			half-step apart. Two half steps equal one whole step the tones G and A, A and B, C and E are
			one whole step apart !
		</p>
		<p>C (Do)--D (Re)--E (Mi)-F (Fa)--G (Sol)--A (La)--B (Si)-C (Do) * - semitone</p>
		<div class="h-1 w-full bg-indigo-500 mt-6" />
		<div>
			<p class="text-center mt-3 font-semibold ">New Words</p>
			<p>
				Tone - a constant sound with certain frequency of oscillations;<br />
			    Step - distance between tones,notes;<br />
				Timbre - the unique sound of each instrument or voice;
			</p>
		</div>
	</div>
	<div class="mb-16 flex justify-end">
		<div class="w-[180px]">
		<a href="https://music-guru.vercel.app/lessons" class="">
			<div class="rounded-2xl border text-center bg-indigo-600 border-indigo-600">
				<p class="p-5 text-white font-semibold">Go to lessons page</p>
			</div>
		</a>
	    </div>
	</div>
    <audio id="do" src="https://music-guru.vercel.app/audio/do.ogg"></audio>
    <audio id="re" src="https://music-guru.vercel.app/audio/re.ogg"></audio>
    <audio id="mi" src="https://music-guru.vercel.app/audio/mi.ogg"></audio>
    <audio id="fa" src="https://music-guru.vercel.app/audio/fa.ogg"></audio>
    <audio id="sol" src="https://music-guru.vercel.app/audio/sol.ogg"></audio>
    <audio id="la" src="https://music-guru.vercel.app/audio/la.ogg"></audio>
    <audio id="si" src="https://music-guru.vercel.app/audio/si.ogg"></audio>
</section>
