<script>
    import "../app.css";
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
</script>

<div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
    <Nav/>
    <main class="max-w-5xl mx-auto px-6 py-12">
        <slot></slot>
    </main>
    <Footer/>
</div>