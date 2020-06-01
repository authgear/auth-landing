<script>
  export let currPath = "";

  const linksReverseMap = {
    terms: "Authgear Terms of Services",
    "license-terms": "Authgear License Subscription Terms and Conditions",
    promise: "Our Promises",
    policy: "Acceptable Use Policy",
    "data-privacy": "Data Privacy Policy",
    sla: "Service Level Agreement",
    security: "Security",
  };
  const currTitle = linksReverseMap[currPath];
</script>

<style>
  .learn-more {
    padding-top: 180px;
    padding-bottom: 80px;
    padding-left: 18px;
    padding-right: 18px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .learn-more__title {
    font-weight: 700;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 24px;
  }

  .learn-more__toc {
    margin-top: 64px;
    margin-bottom: 64px;
    padding: 0;
    list-style: none;
  }

  .learn-more__toc-link {
    color: #166bef;
    line-height: 1.6;
  }

  .learn-more__toc-link:hover {
    color: #75a8f6;
  }

  .learn-more__toc-link--active {
    background-color: #fff5a1;
  }

  .learn-more__section-title {
    font-size: 28px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 768px) {
    .learn-more {
      padding-left: 56px;
      padding-right: 56px;
    }

    .learn-more__title {
      font-size: 48px;
    }
  }
</style>

<div class="learn-more">
  <h1 class="learn-more__title">Learn More</h1>
  <ul class="learn-more__toc">
    {#each Object.keys(linksReverseMap) as link}
      <li class="learn-more__toc-item">
        <a
          class:learn-more__toc-link--active={link === currPath}
          class="learn-more__toc-link"
          href={link}>
          {linksReverseMap[link]}
        </a>
      </li>
    {/each}
  </ul>
  <h2 class="learn-more__section-title">{currTitle}</h2>
  <slot />
</div>
