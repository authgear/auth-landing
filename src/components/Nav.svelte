<script>
  const navLinks = [
    { name: "Features", href: "." },
    { name: "Comparison", href: "." },
    { name: "Documentation", href: "." },
    { name: "Pricing", href: "pricing" },
    { name: "Open Sources", href: "." },
  ];

  let showMobileMenu = false;

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }
</script>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 12px 0;
    background-color: #fff;
    border-bottom: 1px solid hsl(0, 0%, 66.7%);
    z-index: 1;
  }

  .nav__logo-wrapper {
    display: flex;
    align-items: center;
  }

  .nav__logo-img {
    flex-grow: 0;
    width: auto;
    height: 38px;
    border: 0;
    vertical-align: middle;
  }

  .nav__links-wrapper {
    display: flex;
    margin: 0;
    justify-content: flex-end;
    align-items: center;
  }

  .nav__links-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 0;
  }

  .nav__link-item {
    list-style: none;
  }

  .nav__link {
    color: #2275f4;
    font-weight: 500;
  }

  .nav__link:hover {
    color: #75a8f6;
  }

  .container-fluid {
    max-width: 1200px;
  }

  .nav__action-btn {
    flex-grow: 0;
    color: #2275f4;
    font-weight: 500;
    box-shadow: 0 2px 7px hsla(0, 0%, 0%, 0.5);
    background-color: #fff;
    margin-left: 20px;
  }

  .nav__action-btn:hover {
    color: #75a8f6;
  }

  .nav__mobile-toggle {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;
  }

  .nav__mobile-toggle-line {
    display: none;
    width: 15px;
    height: 2px;
    margin-bottom: 2px;
    position: relative;
    background: hsl(0, 0%, 66.7%);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  .nav__mobile-toggle-line:first-child {
    transform-origin: 0% 0%;
  }

  .nav__mobile-toggle-line:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .nav__mobile-toggle-line--active {
    opacity: 1;
    transform: rotate(45deg) translate(-1px, 0px);
    background: hsl(0, 0%, 66.7%);
  }

  .nav__mobile-toggle-line--active:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .nav__mobile-toggle-line--active:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, -1px);
  }

  .nav__mobile-overlay {
    display: none;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(16, 22, 26, 0.7);
    overflow: auto;
    user-select: none;
  }

  @media screen and (min-width: 992px) {
    .container-fluid {
      padding-right: 56px;
      padding-left: 56px;
    }

    .nav__link {
      font-size: 14px;
      padding: 8px 11px;
    }

    .nav__action-btn {
      font-size: 14px;
      padding: 10px 23px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .container-fluid {
      padding-right: 45px;
      padding-left: 45px;
    }

    .nav__link {
      font-size: 12px;
      padding: 8px 5px;
    }

    .nav__action-btn {
      font-size: 12px;
      padding: 10px 23px;
    }
  }

  @media screen and (max-width: 767px) {
    .container-fluid {
      padding-right: 10px;
      padding-left: 10px;
    }

    .nav__action-btn {
      font-size: 12px;
      padding: 6px 18px;
      margin-left: 0;
    }

    .nav {
      padding: 0;
    }

    .nav__links-wrapper {
      height: 50px;
    }

    .nav__logo-img {
      height: 26px;
      margin-left: 20px;
    }

    .nav__mobile-menu {
      position: fixed;
      top: 20px;
      left: 8px;
      z-index: 2;
    }

    .nav__mobile-toggle {
      display: block;
    }

    .nav__mobile-toggle-line {
      display: block;
    }

    .nav__links-list {
      position: absolute;
      width: 300px;
      margin: -100px 0 0 -50px;
      padding: 50px 15px 50px 80px;
      padding-top: 125px;
      background: hsla(0, 0%, 100%, 0.95);
      list-style-type: none;
      border-right: 1px solid #e8e8e8;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      min-height: calc(100vh + 100px);
      transform-origin: 0 0;
      transform: translate(-100%);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: nowrap;
    }

    .nav__links-list--active {
      transform: none;
    }

    .nav__link-item {
      padding: 10px 0;
      font-size: 16px;
      width: 100%;
    }

    .nav__mobile-overlay--active {
      display: block;
      z-index: 1;
    }
  }
</style>

<header class="nav">
  <div class="container-fluid">
    <div class="row">
      <div class="nav__logo-wrapper col-6 col-sm-6 col-md-3">
        <a href=".">
          <img
            class="nav__logo-img"
            src="img/header-logo.png"
            alt="Authgear Logo" />
        </a>
      </div>
      <div class="col-6 col-sm-6 col-md-9">
        <nav class="nav__links-wrapper">
          <div class="nav__mobile-menu">
            <input class="nav__mobile-toggle" on:click={toggleMobileMenu} />
            <span
              class="nav__mobile-toggle-line"
              class:nav__mobile-toggle-line--active={showMobileMenu} />
            <span
              class="nav__mobile-toggle-line"
              class:nav__mobile-toggle-line--active={showMobileMenu} />
            <span
              class="nav__mobile-toggle-line"
              class:nav__mobile-toggle-line--active={showMobileMenu} />
            <ul
              class="nav__links-list"
              class:nav__links-list--active={showMobileMenu}>
              {#each navLinks as navLink}
                <li class="nav__link-item">
                  <a class="nav__link" href={navLink.href}>{navLink.name}</a>
                </li>
              {/each}
            </ul>
          </div>
          <div
            class="nav__mobile-overlay"
            class:nav__mobile-overlay--active={showMobileMenu}
            on:click={toggleMobileMenu} />
          <a
            href="https://oursky.us2.list-manage.com/subscribe/post?u=34db69ee3e01fe49e12302054&amp;id=78e15b4a2a"
            class="nav__action-btn">
            Talk to Us
          </a>
        </nav>
      </div>
    </div>
  </div>
</header>
