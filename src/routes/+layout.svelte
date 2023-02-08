<script>
    import "../app.css";
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
  </script>
  <body class="w-full h-full"></body>
  <div class="p-8 mw-auto mx-auto">
  <Nav/> 
  <slot></slot>
  <Footer/>
</div>
