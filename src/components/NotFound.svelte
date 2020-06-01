<script>
  import Button from "./Button.svelte";
</script>

<style>
  .notfound {
    margin: 0 auto;
    padding: 180px 18px;
    max-width: 1200px;
  }

  .notfound__title {
    margin-bottom: 48px;
    margin-top: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
  }

  .notfound__message {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 16px;
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    .notfound {
      padding: 180px 56px;
    }
  }
</style>

<div class="notfound">
  <h1 class="notfound__title">Something went wrong</h1>
  <p class="notfound__message">
    Oops the page you were looking for was not found.
  </p>
  <Button href=".">Return to homepage</Button>
</div>
