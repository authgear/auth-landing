<script>
  export let href;
  export let large = false;
  export let fluid = false;
</script>

<style>
  .btn {
    display: inline-block;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 0;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    line-height: 1;
    text-align: center;
    background-color: #166bef;
    color: #fff;

    padding: 12px 15px;
    font-size: 14px;
    font-weight: 500;
  }

  .btn--fluid {
    width: 100%;
  }

  .btn--large {
    font-size: 15px;
    font-weight: 400;
    padding: 14px 16px;
  }

  .btn:hover {
    background-color: #14679e;
  }
</style>

<a {href} class:btn--large={large} class:btn--fluid={fluid} class="btn">
  <slot />
</a>
