# Ink, the official u-BMC WebUI

## Requirements

yarn and Node.js. To run the :ci scripts a running docker daemon is required as well.

Use your Distributions or operating systems default way of installing these two.

## Developing

While the project can be built and tested with yarn in your local environment alone, it is recommended to also use the XXX:ci scripts.
The scripts suffixed with ci wrap the non :ci script in [Dagger](https://dagger.io).
Dagger is used for our CI and makes testing with Vitest and Playwright easier, as it uses Microsofts official images for that.

First make sure all dependecies are installed:

```bash
yarn install
```

To start a local development server:

```bash
yarn run dev
```

To test the written code first run the linters:

```bash
yarn run lint
```

Afterwards run the tests:

```bash
yarn run test
```

## Building

To create a production version of your app:

```bash
yarn run build
```

You can preview the production build with:

```bash
yarn run preview
```

Each script can be run in any order. By using Wireit under the hood the scripts always make sure all requirements are met.
