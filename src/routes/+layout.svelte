<script>
    import "../app.css";
    import Nav from "../components/nav.svelte"
  </script>
  <body class="dark:bg-black w-full h-full"></body>
  <div class="p-8 max-w-6xl mx-auto">
  <Nav/> 
  <slot></slot>
</div>