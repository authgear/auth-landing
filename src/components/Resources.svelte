<script>
  const links = [
    { name: "Documentations", href: "https://docs.skygear.io" },
    { name: "Github", href: "https://github.com/authgear" },
  ];
</script>

<style>
  .resources {
    background-color: #0b63e9;
  }

  .container-fluid {
    max-width: 1200px;
  }

  .resources__title {
    font-size: 16px;
    font-weight: 900;
    color: #fff;
    margin: 0;
  }

  .resources__links-list {
    display: flex;
    margin: 0;
  }

  .resources__links-list__item {
    list-style: none;
  }

  .resources__links-list__link {
    font-size: 16px;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .resources {
      padding-top: 65px;
      padding-bottom: 65px;
    }

    .container-fluid {
      padding-left: 56px;
      padding-right: 56px;
    }

    .resources__links-list {
      justify-content: flex-end;
    }

    .resources__links-list__item {
      margin-left: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    .resources {
      padding-top: 30px;
      padding-bottom: 30px;
    }

    .container-fluid {
      padding-left: 18px;
      padding-right: 18px;
    }

    .resources__links-list {
      margin-top: 35px;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
    }

    .resources__links-list__item {
      margin-bottom: 15px;
    }
  }
</style>

<section class="resources">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <h3 class="resources__title">Looking for resources?</h3>
      </div>
      <div class="col-12 col-md-6">
        <ul class="resources__links-list">
          {#each links as link}
            <li class="resources__links-list__item">
              <a
                target="_blank"
                class="resources__links-list__link"
                href={link.href}>
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
