<script>
  import CodeEditor from "./CodeEditor.svelte";
  import JavaScriptCode, {
    metadata as jsData,
  } from "./code-sample/JavaScript.svx";
  import KotlinCode, { metadata as kotlinData } from "./code-sample/Kotlin.svx";
  import SwiftCode, { metadata as swiftData } from "./code-sample/Swift.svx";

  // TODO: Replace placeholder code with actual sample code
  const codeTabs = [
    {
      language: "JavaScript",
      component: JavaScriptCode,
      content: jsData.content,
    },
    {
      language: "Kotlin",
      component: KotlinCode,
      content: kotlinData.content,
    },
    {
      language: "Swift",
      component: SwiftCode,
      content: swiftData.content,
    },
  ];
</script>

<style>
  .code-sample {
    padding-top: 0;
    padding-bottom: 80px;
  }

  .container-fluid {
    max-width: 1200px;
  }

  .code-sample__title {
    color: #166ff7;
    font-size: 32px;
    text-align: center;
    line-height: 1.4;
    margin: 0;
  }

  .code-sample__img-wrapper {
    text-align: center;
    padding-top: 25px;
    padding-bottom: 45px;
  }

  .code-sample__img {
    max-width: 420px;
    width: 100%;
    height: auto;
    display: inline-block;
    vertical-align: top;
    box-shadow: 0 1.6px 3.6px 0 hsla(0, 0%, 0%, 0.13);
  }

  @media screen and (min-width: 768px) {
    .container-fluid {
      padding-left: 56px;
      padding-right: 56px;
    }

    .code-sample__content-wrapper {
      margin-top: 92px;
    }
  }

  @media screen and (max-width: 767px) {
    .code-sample {
      padding-bottom: 60px;
    }

    .code-sample__editor-wrapper {
      padding: 0;
    }

    .code-sample__content-wrapper {
      margin-top: 55px;
    }

    .code-sample__img-wrapper {
      display: none;
    }
  }
</style>

<section class="code-sample">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="code-sample__title">
          Integrate Authgear in Any Application in Just 5 Minutes!
        </h1>
      </div>
    </div>
    <div class="code-sample__content-wrapper row">
      <div class="code-sample__editor-wrapper col-12 col-md-6">
        <CodeEditor {codeTabs} />
      </div>
      <div class="col-12 col-md-6">
        <div class="code-sample__img-wrapper">
          <img
            class="code-sample__img"
            src="img/ui-demo.png"
            alt="UI Demo of Authgear SSO" />
        </div>
      </div>
    </div>
  </div>
</section>
