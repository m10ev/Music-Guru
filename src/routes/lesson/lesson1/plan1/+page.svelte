<script>
    function play() {
        var audio = document.getElementById("audio");
        audio.play();
	}
</script>
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto ">
	  <div class="flex flex-wrap w-full mb-20 ">
		<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
		  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Lesson1.Notes and notes duration</h1>
		  <div class="h-1 w-28     bg-indigo-500 rounded"></div>
		</div>
		<p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Hello there our friend welcome to our first lesson. Today we are going to learn about notes. You
			may have heard about notes, but do you know what they are used for. We can compare the
			importance of notes in music to that of letters in languages. How would you be able to read this
			if you didn’t know the letters, so let’s learn about notes.</p>
	  </div>
	  <p class="mb-20 text-2xl">In music notes are a type of notation that mark the duration of sound (tones) and tones represent the pitch. The notes have duration that is measured with beats</p>
	  <div class="flex flex-wrap -m-4">
		<div class="xl:w-1/4 md:w-1/2 p-4">
		  <div class="bg-gray-100 p-6 rounded-lg h-72  w-[300px] hover:shadow-xl">
			<img class="h-20 w-auto rounded ml-14  object-cover object-center  mb-6" src="https://music-guru.vercel.app/whole.webp " alt="content">
			<h2 class="text-lg text-gray-900 font-medium title-font   ">Whole note</h2>
			<h3 class="tracking-widest text-indigo-500 text-md font-medium title-font mb-4">4 beats</h3>
			
			<p class="leading-relaxed text-base">The longest off al notes is the whole note</p>
		  </div>
		</div>
		<div class="xl:w-1/4 md:w-1/2 p-4">
			<div class="bg-gray-100 p-6 rounded-lg h-72 w-[300px] hover:shadow-xl">
				<img class="h-20 w-auto rounded ml-14  object-cover object-center  mb-6" src="https://music-guru.vercel.app/half.webp " alt="content">
				<h2 class="text-lg text-gray-900 font-medium title-font   ">Half note</h2>
				<h3 class="tracking-widest text-indigo-500 text-md font-medium title-font mb-4">2 beats</h3>
			<p class="leading-relaxed text-base">The half note has half the duration of a whole</p>
		  </div>
		</div>
		<div class="xl:w-1/4 md:w-1/2 p-4">
		  <div class="bg-gray-100 p-6 rounded-lg h-72 w-[300px] hover:shadow-xl" >
			<img class="h-20 w-auto rounded ml-14  object-cover object-center  mb-6" src="https://music-guru.vercel.app/quater.webp " alt="content">
			<h2 class="text-lg text-gray-900 font-medium title-font   ">Quater note</h2>
			<h3 class="tracking-widest text-indigo-500 text-md font-medium title-font mb-4">1 beat</h3>
			<p class="leading-relaxed text-base">The quarter note is a fourth of a whole note</p>
		  </div>
		</div>
		<div class="xl:w-1/4 md:w-1/2 p-4">
		  <div class="bg-gray-100 p-6 rounded-lg h-72 w-[300px] hover:shadow-xl">
			<img class="h-20 w-auto rounded ml-14  object-cover object-center  mb-6" src="https://music-guru.vercel.app/8th.webp " alt="content">
			<h2 class="text-lg text-gray-900 font-medium title-font   ">Eighth note</h2>
			<h3 class="tracking-widest text-indigo-500 text-md font-medium title-font mb-4">1/2 of a beat</h3>
			<p class="leading-relaxed text-base"> The Eigth note is eighth of a whole note</p>
		  </div>


		</div>
		<div class="xl:w-1/4 md:w-1/2 p-4">
			<div class="bg-gray-100 p-6 rounded-lg h-72 w-[300px] hover:shadow-xl">
				<img class="h-20 w-auto rounded ml-14  object-cover object-center  mb-6" src="https://music-guru.vercel.app/32th.webp " alt="content">
				<h2 class="text-lg text-gray-900 font-medium title-font   ">Sixteenth note</h2>
				<h3 class="tracking-widest text-indigo-500 text-md font-medium title-font mb-4">1/4 of a beat</h3>
			<p class="leading-relaxed text-base"> the Sixteenth note is a sixteenth of a whole note </p>
		  </div>
		</div>
		<p class="  font-normal   text-gray-900  mt-4 text-[16,px]  ml-6   ">
		     Notes are measured with beats. Now you will see how to
			use some math with notes, <br />
			Whole note(4b.) = half note(2b.) + half note(2 b.) <br /> Half note(2b.) = quater note(1b.) +
			quater note (1b.) <br /> Quater note(1b.) = eighth note(1/2b.) + eighth note(1/2b.) <br>
			Another example is - Whole note(4b.) = Quater note(1b.) + Quater note(1b.) + Quater note(1b.) + Quater note(1b.) <br>
			Every note with less duration than the quarter note has flags. <br> A flag halves the duration of a note. <br>

			- An eight note has one flag. Therefore, two eight notes have the same duration as a quarter note. <br>
			
			 You can add more flags but these types of notes are not as regularly used.  
		</p>
         
	
		  
		</div>
		<div class="h-1 w-full bg-indigo-500 mt-6"></div>
		<div>
        <p class="text-center mt-3 font-semibold ">New Words</p>
		<p> Note- notation mark in music representing duration of a sound<br>Duration- the length of time each note is played for <br>Beat- regulaly repeated rhythm(unit for duration) <br> Flag- an element of a note</p>
        


		</div>
		
	  </div>
	
</section>
<audio id="whole" src=""></audio>
<audio id="half" src=""></audio>
<audio id="qarter" src=""></audio>
<audio id="eighth" src=""></audio>
<audio id="sixteenth" src=""></audio>