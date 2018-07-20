# react-statics

Decorate React components with static properties

## Table of contents

## Summary

When working with stateless functional components, or overriding default values on decorated components, applying statics can feel a bit boilerplate-y. This decorator centralizes the static property assignment, and allows for easy decorated composition.

## Usage

#### Standard

```javascript
import React from "react";
import statics from "react-statics";

const App = ({ foo }, { bar }) => (
  <div>
    {foo}: {bar}
  </div>
);

export default statics({
  contextTypes: {
    bar: PropTypes.node.isRequired
  },
  displayName: "MySpecialApp",
  propTypes: {
    foo: PropTypes.string.isRequired
  }
})(App);
```

#### Composed

```javascript
import React from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import statics from "react-statics";
import { compose } from "redux";

const App = ({ foo }, { bar }) => (
  <div>
    {foo}: {bar}
  </div>
);

export default compose(
  statics({
    contextTypes: {
      bar: PropTypes.node.isRequired
    },
    displayName: "MySpecialApp",
    propTypes: {
      foo: PropTypes.string.isRequired
    }
  }),
  translate(["namespace"]),
  connect(({ reducer }) => reducer)
)(App);
```

**NOTE**: To ensure the values passed override any assigned by other composed decorators, place `statics` last to executë in the composition chain.

## Development

Standard stuff, clone the repo and `npm install` dependencies. The npm scripts available:

- `build` => run rollup to build development `dist` files
- `clean` => run `clean:dist`, `clean:es`, and `clean:lib`
- `clean:dist` => remove all existing files in the `dist` folder
- `clean:es` => remove all existing files in the `es` folder
- `clean:lib` => remove all existing files in the `lib` folder
- `dev` => run webpack dev server to run example app / playground
- `dist` => runs `clean:dist` and `build`
- `lint` => run ESLint against all files in the `src` folder
- `lint:fix` => run ESLint against all files in the `src` folder, fixing anything it can automatically
- `prepublish` => runs `prepublish:compile` when publishing
- `prepublish:compile` => run `lint`, `test:coverage`, `transpile:lib`, `transpile:es`, and `dist`
- `test` => run AVA test functions with `NODE_ENV=test`
- `test:coverage` => run `test` but with `nyc` for coverage checker
- `test:watch` => run `test`, but with persistent watcher
- `transpile:lib` => run babel against all files in `src` to create files in `lib`
- `transpile:es` => run babel against all files in `src` to create files in `es`, preserving ES2015 modules (for
  [`pkg.module`](https://github.com/rollup/rollup/wiki/pkg.module))
