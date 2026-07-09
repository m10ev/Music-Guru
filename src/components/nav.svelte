<script>
    import { onMount } from 'svelte';

    let isDark = false;

    onMount(() => {
        isDark = document.documentElement.classList.contains('dark');
    });

    function toggleDark() {
        const html = document.documentElement;
        html.classList.toggle('dark');
        isDark = html.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
</script>

<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
	<div class="flex w-full items-center">
		<div class="flex gap-6 mx-auto">
			<a class="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/">Home</a>
			<a class="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/about">About</a>
			<a class="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="/ourTeam">Our Team</a>
		</div>
		<button
			on:click={toggleDark}
			class="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
			aria-label="Toggle dark mode"
		>
			<img src={isDark ? 'sun-svgrepo-com.svg' : '/moon-svgrepo-com.svg'} alt="toggle theme" class="w-5 h-5" />
		</button>
	</div>
</nav>