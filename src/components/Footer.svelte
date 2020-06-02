<script>
  import { pages as learnMorePages } from "../layouts/learn-more.svelte";
</script>

<style>
  footer {
    padding-top: 50px;
    padding-bottom: 50px;
    background: #222;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }

  .container-fluid {
    max-width: 1200px;
  }

  img.footer-logo {
    width: 145px;
    margin-bottom: 40px;
  }

  .sitemap-title {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .sitemap-list {
    margin: 13px 0;
    padding: 0;
    list-style: none;
  }

  .sitemap-list li {
    line-height: 1.6;
  }

  .sitemap-list a {
    color: #aaa;
  }

  .copyright-wrapper {
    margin-top: 60px;
    line-height: 1.5;
  }

  .footer__email-link {
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .container-fluid {
      padding-right: 45px;
      padding-left: 45px;
    }
    .copyright {
      text-align: right;
    }
  }

  @media screen and (max-width: 767px) {
    img.footer-logo {
      width: 115px;
    }

    .container-fluid {
      padding-right: 21px;
      padding-left: 21px;
    }

    .copyright {
      text-align: left;
    }
  }
</style>

<footer>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <img class="footer-logo" src="img/footer-logo.png" alt="Footer Logo" />
      </div>
      <div class="col-12 col-md-2">
        <span class="sitemap-title">Learn</span>
        <ul class="sitemap-list">
          <li>
            <a href=".">Blog</a>
          </li>
          <li>
            <a target="_blank" href="https://docs.skygear.io/">Documentation</a>
          </li>
          {#each learnMorePages as page}
            <li>
              <a target="_blank" href={page.slug}>{page.title}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <span class="sitemap-title">Company</span>
        <ul class="sitemap-list">
          <li>
            <a target="_blank" href="https://github.com/orgs/authgear/people">
              Team
            </a>
          </li>
          <li>
            <a href="mailto:hello@skygear.io">Contact</a>
          </li>
          <li>
            <a target="_blank" href="https://jobs.oursky.com/">Jobs</a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <span class="sitemap-title">Connect</span>
        <ul class="sitemap-list">
          <li>
            <a target="_blank" href="https://twitter.com/authgear">Twitter</a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/oursky.hk">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/authgear">Github</a>
          </li>
          <li>
            <a target="_blank" href="https://discuss.skygear.io/">Discourse</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row copyright-wrapper">
      <div class="col-12 col-md-6">
        <a class="footer__email-link" href="mailto:hello@skygear.io">
          hello@skygear.io
        </a>
      </div>
      <div class="col-12 col-md-6 copyright">
        <span>© Oursky Ltd. All rights reserved</span>
      </div>
    </div>
  </div>
</footer>
