<script>
  import NotFound from "../components/NotFound.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>Authgear: {status}</title>
</svelte:head>

{#if status === 404}
  <NotFound />
{/if}

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
