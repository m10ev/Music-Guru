<html lang="">
	<body class="max-w-6xl mx-auto">
		<div class="flex justify-center mt-12">
			<h1 class=" text-6xl text-center font-semibold">
				How many quarter notes make up a whole note?
			</h1>
		</div>
		<ul class="mt-12 grid grid-cols-2 gap-4 flex justify-center items-center" id="ull">
			<li>
				<div class="flex items-center">
					<input id="q1" type="radio" value="" name="question" class="hidden peer required" />
					<label
						for="q1"
						class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
						>2</label
					>
				</div>
			</li>
			<li>
				<div class="flex items-center">
					<input id="q2" type="radio" value="" name="question" class="hidden peer required" />
					<label
						for="q2"
						class=" w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
						>4</label
					>
				</div>
			</li>
			<li>
				<div class="flex items-center">
					<input id="q3" type="radio" value="" name="question" class="hidden peer required" />
					<label
						for="q3"
						class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
						>8</label
					>
				</div>
			</li>
			<li>
				<div class="flex items-center">
					<input id="q4" type="radio" value="" name="question" class="hidden peer required" />
					<label
						for="q4"
						class="w-full border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 hover:ring-sky-200 hover:outline-none peer-checked:ring-sky-200 text-center text-4xl text-white"
						>16</label
					>
				</div>
			</li>
		</ul>
		<div class="flex justify-center mt-12">
			<button
				onclick="check()"
				id="check"
				class="border-2 ring-4 ring-transparent border-transparent bg-clip-border bg-sky-400 rounded-md h-12 w-32 hover:ring-sky-200 hover:outline-none focus:ring-sky-200 "
			>
				<p class="text-center text-4xl text-white">Check</p>
			</button>
		</div>
		<footer
			id="disp"
			style="display: none;"
			class="flex mt-6 p-4 shadow rounded-lg w-full bg-green-400"
		>
			<div class="justify-center">
				<p class="text-4xl text-white flex items-center justify-center mb-6">
					Correct! You are doing great.
				</p>
				<button
					id="nxt"
					href=""
					class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
					>Next Question</button
				>
			</div>
		</footer>

		<footer
			id="dispW"
			style="display: none;"
			class="flex mt-6 p-4 shadow rounded-lg w-full bg-red-400"
		>
			<div class="justify-center">
				<p class="text-4xl text-white flex items-center justify-center mb-6">
					Wrong. The answear is 4. Better luck next time.
				</p>
				<button
					id="nxt"
					href=""
					class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
					>Next Question</button
				>
			</div>
		</footer>

		<footer
			id="none"
			style="display: none;"
			class="flex mt-6 p-4 shadow rounded-lg w-full bg-yellow-400"
		>
			<div class="justify-center">
				<p class="text-4xl text-white flex items-center justify-center mb-6">
					Please Select an answear.
				</p>
				<button
					id="nxt"
					onclick="closeFoot()"
					class="flex flex-wrap items-center justify-end flex mb-6 text-white text-4xl font-semibold hover:underline"
					>Close</button
				>
			</div>
		</footer>

		<script>
			function check() {
				if (document.getElementById('q2').checked) {
					document.getElementById('disp').style.display = '';
				} else if (document.getElementById('q1').checked) {
					document.getElementById('dispW').style.display = '';
				} else if (document.getElementById('q3').checked) {
					document.getElementById('dispW').style.display = '';
				} else if (document.getElementById('q4').checked) {
					document.getElementById('dispW').style.display = '';
				} else {
					document.getElementById('none').style.display = '';
				}
			}

			function closeFoot() {
				document.getElementById('none').style.display = 'none';
			}
		</script>

		<script>
			// self executing function here
			(function () {
				var ul = document.getElementById('ull');
				for (var i = ul.children.length; i >= 0; i--) {
					ul.appendChild(ul.children[(Math.random() * i) | 0]);
				}
			})();
		</script>
	</body>
</html>
