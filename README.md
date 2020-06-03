# auth-landing ![CI Status](https://github.com/authgear/auth-landing/workflows/auth-landing%20CI/badge.svg?branch=master&event=push)

Landing page for Authgear. This repo is based off svelte's [sappler boilerplate](https://github.com/sveltejs/sapper-template/tree/rollup) so for more information look there.

Staging site can be found here: https://authgear.github.io/auth-landing/

# Setup

```
git clone https://github.com/authgear/auth-landing
cd auth-landing
npm install
```

# Usage

To run a local development server, use `npm run dev`

To generate a production build, use `npm run export` which will output to the `__sapper__/export` folder.

**Note**: `npm run build` generates a production node server while `npm run export` generates the production static build
