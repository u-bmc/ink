# Ink, the official u-BMC WebUI

## Requirements

yarn and/or dagger

## Developing

While the project can be built and tested with yarn in your local environment alone, it is recommended to also install [dagger](https://dagger.io/).
Dagger is used for our CI and makes testing with playwright (our E2E testing framework) easier, as it uses Microsofts official images for that.

First make sure all dependecies are installed:

```
yarn install

# and when using dagger
dagger project update
```

To start a local development server:

```
yarn run dev
```

To test the written code first run the linters:

```
yarn run lint

# or via dagger
dagger do lint
```

Afterwards run the E2E tests:

```
yarn run test

# or via dagger
dagger do test
```

## Building

To create a production version of your app:

```
yarn run build

# or via dagger
dagger do build
```

You can preview the production build with:

```
yarn run preview
```
