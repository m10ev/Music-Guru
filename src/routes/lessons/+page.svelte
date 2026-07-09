<script>
    let openLesson = null;

    function toggle(id) {
        openLesson = openLesson === id ? null : id;
    }

    const lessons = [
        {
            id: 'a',
            title: 'Notes I',
            icon: 'lesson1icon.webp',
            lessonHref: '/lesson/lesson1/plan1',
            testHref: '/lesson/test1'
        },
        {
            id: 'b',
            title: 'Tones I',
            icon: 'lesson2icon.webp',
            lessonHref: '/lesson/lesson2/plan2',
            testHref: '/lesson/test2'
        }
    ];
</script>

<div class="max-w-2xl mx-auto mt-12 px-4">
    <h1 class="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">Notes and Tones</h1>
    <div class="flex flex-col gap-6">
        {#each lessons as lesson}
            <div class="rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-indigo-400/30 transition-all duration-300">
                <button
                    on:click={() => toggle(lesson.id)}
                    class="w-full flex items-center gap-6 p-6 text-left"
                    aria-label="Toggle {lesson.title}"
                >
                    <img src={lesson.icon} alt={lesson.title} class="w-16 h-16 rounded-xl object-cover" />
                    <span class="text-2xl font-semibold text-gray-900 dark:text-white">{lesson.title}</span>
                    <span class="ml-auto text-gray-400 text-2xl">{openLesson === lesson.id ? '▲' : '▼'}</span>
                </button>
                {#if openLesson === lesson.id}
                    <div class="flex gap-4 px-6 pb-6">
                        <a href={lesson.lessonHref}
                            class="flex-1 text-center py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
                            Lesson
                        </a>
                        <a href={lesson.testHref}
                            class="flex-1 text-center py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
                            Test
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>