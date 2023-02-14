<script>
    function showA(){
        document.getElementById('a').style.display=""
    }
    function showB(){
        document.getElementById('b').style.display=""
    }
</script>
<html>
    <div class="flex mt-12 overflow-hidden justify-center">
        <div class="p-6">
            <h1 class="text-6xl text-center font-bold">Notes and Tones</h1>
            <div on:click={showA}>
                <a href="" class="relative block -m-6 p-6 rounded-lg">
                <img class="mt-4 ml-40 justify-center flex w-[150px] h-[150x] " src="lesson1icon.webp">
                <p class="mt-4 text-center font-bold flex justify-center">Notes I</p>
            </div>
            <div id="a" style="display:none" class="flex flex justify-center gap-4 mt-4">
                <a href="/lesson/lesson1/plan1" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Lesson</p>
                </a>
                <a href="/lesson/test1" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Test</p>
                </a>
            </div>
            <div on:click={showB}>
                <a href="" class="relative block -m-6 p-6 rounded-lg">
                <img class="mt-4 ml-40 justify-center flex w-[150px] h-[150x] " src="lesson2icon.webp">
                <p class="mt-4 text-center font-bold flex justify-center">Tones I</p>
            </div>
            <div id="b" style="display:none" class="flex flex justify-center gap-4 mt-4">
                <a href="/lesson/lesson2/plan2" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Lesson</p>
                </a>
                <a href="/lesson/test2" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Test</p>
                </a>
            </div>
        </div>
    </div>
</html>