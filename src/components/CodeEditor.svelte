<script>
  export let codeTabs = [];

  let currTab = codeTabs[0];
  $: currLanguage = currTab.language.toLowerCase();
  let showTooltip = false;

  function handleTabClick(idx) {
    return function cb() {
      if (currTab !== codeTabs[idx]) {
        currTab = codeTabs[idx];
      }
    };
  }

  function handleCopyClick() {
    const textArea = document.createElement("textarea");
    textArea.value = currTab.content;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.zIndex = "-1";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showTooltip = true;
    setTimeout(() => {
      showTooltip = false;
    }, 1500);
  }
</script>

<style>
  .editor {
    height: 100%;
    min-height: 350px;
    max-height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 14px 0 hsla(0, 0%, 0%, 0.5);
  }

  .editor__header {
    display: flex;
    justify-content: space-between;
  }

  .editor__header__tabs-wrapper {
    padding: 20px 25px 5px 25px;
    background-color: #fff;
  }

  .editor__header__tab {
    display: inline-block;
    font-size: 13px;
    font-weight: 900;
    padding: 5px 4px;
    margin-bottom: 10px;
    margin-right: 35px;
    cursor: pointer;
    background-color: #fff;
  }

  .editor__header__tab:last-child {
    margin-right: 0;
  }

  .editor__header__tab--active {
    border-bottom: 3px solid hsl(216, 93.4%, 52.7%);
    margin-bottom: 7px;
  }

  .editor__header__copybtn-wrapper {
    display: flex;
    align-items: center;
    position: relative;
  }

  .editor__header__copybtn {
    padding: 10px 20px;
    color: #166ff7;
    font-size: 13px;
    font-weight: 900;
    background-color: #fff;
  }

  .editor__header__copy-tooltip {
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    background: #717171;
    padding: 12px 18px;
    border-radius: 6px;
    transition: opacity 0.8s ease 0s;
  }

  .editor__header__copy-tooltip:before {
    left: 38.5px;
    top: -5px;
    width: 0px;
    height: 0px;
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0px 5px 5px;
    border-color: transparent transparent #717171;
  }

  .editor__header__copy-tooltip--visible {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    .editor__header__copybtn-wrapper {
      display: none;
    }
  }
</style>

<div class="editor">
  <div class="editor__header">
    <div class="editor__header__tabs-wrapper">
      {#each codeTabs as tab, idx}
        <button
          class="editor__header__tab"
          class:editor__header__tab--active={currTab.language === tab.language}
          on:click={handleTabClick(idx)}>
          {tab.language}
        </button>
      {/each}
    </div>
    <div class="editor__header__copybtn-wrapper">
      <button class="editor__header__copybtn" on:click={handleCopyClick}>
        Copy Code
      </button>
      <div
        class="editor__header__copy-tooltip"
        class:editor__header__copy-tooltip--visible={showTooltip}>
        Copied!
      </div>
    </div>
  </div>
  <svelte:component this={currTab.component} />
</div>
