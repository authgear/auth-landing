<script>
  import NotFound from "../components/NotFound.svelte";
  import ErrorLayout from "../components/ErrorLayout.svelte";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>Authgear: {status}</title>
</svelte:head>

{#if status === 404}
  <NotFound />
{:else}
  <ErrorLayout
    title="Something went wrong"
    message="Please refresh the page or return to homepage" />
{/if}
{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
