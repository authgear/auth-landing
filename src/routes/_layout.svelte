<script>
  import Nav from "../components/Nav.svelte";
  import CallToAction from "../components/CallToAction.svelte";
  import Resources from "../components/Resources.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style global src="../styles/global.css">
  /* For information about these style tag attributes: https://github.com/sveltejs/svelte-preprocess#features */
</style>

<Nav />

<main>
  <slot />
</main>
<CallToAction />
<Resources />
<Footer />
