<script>
    import { onMount } from 'svelte';
    import "../app.css";
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"

    onMount(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
</script>

<div class="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
    <Nav/>
    <main class="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <slot></slot>
    </main>
    <Footer/>
</div>