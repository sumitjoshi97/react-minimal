# React-Minimal

### Minimal React Boilerplate with most features

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn lint](#yarn-lint)
  - [yarn test](#yarn-test)
  - [yarn test:watch](#yarn-test:watch)
  - [yarn test:coverage](#yarn-test:coverage)

## Features

- React 16
- React Router
- Webpack 4
- Babel 7
- SASS/SCSS support
- Postcss Support
- Environment Variables
- SourceMaps
- Hot Reloading
- Linting with airbnb config
- Commit Hooks
- Production code optimization
- Jest/Enzyme Testing

## Installation

1. git clone https://github.com/sumitjoshi97/react-boiler.git
2. cd react-boiler
3. yarn
4. yarn start

## Folder Structure

```
react-boiler/
  Readme.md
  package.json
  postcss.config.js
  jest.config.js
  webpack.config.base.js
  webapck.config.dev.js
  webpack.config.prod.js
  .babelrc
  .eslintrc
  .prettierrc
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    app/
      index.jsx
      styles.scss
    assets/
      logo.png
    index.js
    index.scss
    setupTests.js
```

You can change prettier config as per your preferences in **.prettierrc** file.

You can change linter config in **.eslintrc** file.

You can change jest config such as collectcoverageFrom, coverageDirectory in **jest.config.js**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode.
Open [localhost:3000](http://localhost:3000) in browser.

### `yarn lint`

Checks the app for linting errors

### `yarn test`

Runs tests for once

### `yarn test:watch`

Runs test in watch mode, so jest watch changes in test files

### `yarn test:coverage`

Provides coverage report of tests run

### `yarn build`

Output the optimized production code
