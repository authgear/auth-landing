<script>
  import Button from "./Button.svelte";

  export let title;
  export let message;
</script>

<style>
  .error {
    margin: 0 auto;
    padding: 180px 18px;
    max-width: 1200px;
  }

  .error__title {
    margin-bottom: 48px;
    margin-top: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
  }

  .error__message {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 16px;
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    .error {
      padding: 180px 56px;
    }
  }
</style>

<div class="error">
  <h1 class="error__title">{title}</h1>
  <p class="error__message">{message}</p>
  <Button href=".">Return to Homepage</Button>
</div>
