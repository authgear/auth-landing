module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["svelte3", "prettier"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        // the following rules are disabled to comply with 'eslint-plugin-svelte3'.
        // See https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
        "import/first": "off",
        "import/no-duplicates": "off",
        "import/no-mutable-exports": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
  extends: ["airbnb-base", "prettier"],
};
