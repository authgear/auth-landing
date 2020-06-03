<script>
  const features = [
    {
      title: "Single Sign-On",
      description: "Login once to multiple applications",
      imgSrc: "img/features/sso.png",
    },
    {
      title: "User Management",
      description: "Centralized management for admin",
      imgSrc: "img/features/user-management.png",
    },
    {
      title: "Simple integration",
      description: "Support OpenID Connect, and K8S gateway Social Login",
      imgSrc: "img/features/simple-integration.png",
    },
    {
      title: "Social Login",
      description: "Sign in with Google, Facebook, Apple and more",
      imgSrc: "img/features/social-login.png",
    },
    {
      title: "Password Policies and MFA",
      description: "Multiple Factor Auth and Customizable Password Polices",
      imgSrc: "img/features/password-policies-mfa.png",
    },
    {
      title: "Sessions Management",
      description: "Better security with sessions management by users",
      imgSrc: "img/features/sessions-management.png",
    },
    {
      title: "Customizable Look and Feel",
      description: "Looks great out of the box and customizable",
      imgSrc: "img/features/customizable.png",
    },
    {
      title: "Existing user directories",
      description: "LDAP and Active Directory support",
      imgSrc: "img/features/user-directories.png",
    },
  ];
</script>

<style>
  .features-section {
    width: 100%;
    background-color: #fff;
  }

  .container-fluid {
    max-width: 1200px;
  }

  .feature-img-wrapper {
    text-align: center;
    width: 100%;
  }

  .feature-img {
    display: inline-block;
    width: 95px;
    height: 95px;
    margin: auto;
    vertical-align: middle;
    border-radius: 50%;
    background-color: #e7e7e7;
  }

  .feature-title {
    font-weight: 700;
    color: #1a1a1a;
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .feature-description {
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    color: #1a1a1a;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    line-height: 1.4;
  }

  @media screen and (min-width: 768px) {
    .features-section {
      padding-top: 145px;
      padding-bottom: 50px;
    }

    .feature-wrapper {
      padding: 0 34px 80px 34px;
    }
  }

  @media screen and (max-width: 767px) {
    .features-section {
      padding-top: 60px;
    }

    .feature-wrapper {
      padding: 0 52px 60px 52px;
    }
  }
</style>

<section id="features-section" class="features-section">
  <div class="container-fluid">
    <div class="row">
      {#each features as feature}
        <div class="feature-wrapper col-12 col-md-3">
          <div class="feature-img-wrapper">
            <img class="feature-img" src={feature.imgSrc} alt={feature.title} />
          </div>
          <h3 class="feature-title">{feature.title}</h3>
          <p class="feature-description">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
