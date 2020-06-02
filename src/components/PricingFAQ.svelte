<script>
  // TODO: Replace placeholder FAQ answers
  const faqItems = [
    {
      question: "Can I export all users data if I stop using Authgear?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What is the definition of monthly active users?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "What's Authgear's uptime and SLA commitment?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Why should I trust Authgear with my users data?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
</script>

<style>
  .faq {
    background-color: #fff;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  .faq__header-title {
    font-size: 32px;
    text-align: center;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .faq__item-wrapper {
    margin-bottom: 45px;
  }

  .faq__item-question {
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;
    color: #166bef;
    line-height: 1.4;
  }

  .faq__item-answer {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .container-fluid {
    max-width: 1200px;
  }

  @media screen and (min-width: 768px) {
    .container-fluid {
      padding-left: 56px;
      padding-right: 56px;
    }
  }

  @media screen and (max-width: 767px) {
    .container-fluid {
      padding-left: 18px;
      padding-right: 18px;
    }
  }
</style>

<section class="faq">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="faq__header-title">FAQ</h1>
      </div>
    </div>
    <div class="row">
      {#each faqItems as faq}
        <div class="faq__item-wrapper col-12 col-md-6">
          <h3 class="faq__item-question">{faq.question}</h3>
          <p class="faq__item-answer">{faq.answer}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
