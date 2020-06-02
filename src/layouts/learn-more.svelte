<script context="module">
  export const linkTitleMap = {
    terms: "Terms of Services",
    promise: "Our Promises",
    policy: "Acceptable Use Policy",
    "data-privacy": "Data Privacy Policy",
    sla: "Service Level Agreement",
    security: "Security",
  };
</script>

<script>
  export let slug = "";

  const currTitle = linkTitleMap[slug];
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
    margin: 64px 0;
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

  .learn-more__section-contents {
    padding: 0;
  }

  :global(.learn-more__section-contents h5) {
    font-weight: 600;
    margin-bottom: 32px;
    margin-top: 32px;
    line-height: 1.4;
    font-size: 17px;
  }

  :global(.learn-more__section-contents h6) {
    font-weight: 400;
    margin-bottom: 8px;
    margin-top: 0;
    line-height: 1.4;
    font-size: 16px;
  }

  :global(.learn-more__section-contents ul, .learn-more__section-contents ol) {
    margin-bottom: 16px;
    margin-left: 20px;
  }

  @media screen and (min-width: 768px) {
    .learn-more {
      padding-left: 56px;
      padding-right: 56px;
    }

    .learn-more__title {
      font-size: 48px;
    }

    :global(.learn-more__section-contents h5) {
      font-size: 20px;
    }
  }
</style>

<div class="learn-more">
  <h1 class="learn-more__title">Learn More</h1>
  <ul class="learn-more__toc">
    {#each Object.keys(linkTitleMap) as link}
      <li class="learn-more__toc-item">
        <a
          class:learn-more__toc-link--active={link === slug}
          class="learn-more__toc-link"
          href={link}>
          {linkTitleMap[link]}
        </a>
      </li>
    {/each}
  </ul>
  <h2 class="learn-more__section-title">{currTitle}</h2>
  <div class="learn-more__section-contents col-md-8 col-12">
    <slot />
  </div>
</div>
