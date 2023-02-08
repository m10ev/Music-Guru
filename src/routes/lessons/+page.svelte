<script>
    function showI(){
        document.getElementById('I').style.display=""
    }
</script>
<html>
    <div class="flex mt-12 overflow-hidden justify-center">
        <div class="p-6">
            <h1 class="text-6xl text-center font-bold">Notes and Tones</h1>
            <div on:click={showI}>
                <a href="" class="relative block -m-6 p-6 rounded-lg">
                <img class="ml-40 mt-4 " src="lesson1icon.jpg" width="150" height="150">
                <p class="mt-4 text-center font-bold">Notes I</p>
            </div>
            <div id="I" style="display:none" class="flex flex justify-center gap-4 mt-4">
                <a href="/lesson/lesson1/plan1" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Lesson</p>
                </a>
                <a href="/lesson/test1" class="text-2xl bg-orange-600 rounded-2xl text-center text-white w-28 h-10 hover:ring-orange-400 hover:ring-4 h-16">
                    <p>Test</p>
                </a>
            </div>
        </div>
    </div>
</html>