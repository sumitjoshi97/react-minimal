# React-Minimal

Minimal React Boilerplate with most features.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Issues and Bugs](#issues-and-bugs)

## Features

- ⚛ React 16
- 🌐 React Router
- 🚀 Webpack 4
- 🛠 Babel 7
- 🌈 SASS/SCSS support
- 🔄 Hot Reloading
- 🎨 Linting with airbnb config
- 🐶 Commit Hooks to prevent bad commits
- ✅ Jest/Enzyme Testing
- ⚡️ Production code optimization

## Installation

1. Clone repo using `git clone https://github.com/sumitjoshi97/react-boiler.git`
2. Move to directory: `cd react-boiler`
3. Run `yarn` or `npm install` for installing dependencies
4. Run `yarn start` to start project

## Folder Structure

After installation, your project should look like this :

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
  __mocks__/
    fileMock.js
    styleMock.js
  public/
    index.html
    favicon.ico
  src/
    App/
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

You can change jest config in **jest.config.js** file.

## Available Scripts

- `yarn start` - Runs app in development mode. Open [localhost:3000](http://localhost:3000) to view it in browser.

- `yarn lint` - Checks for linting errors

- `yarn test` - Launches test runner in watch mode

- `yarn test:coverage` - Provides test coverage report for all tests

- `yarn build` - Builds production ready code

## Issues and Bugs

If you find any issues or bugs while using this boilerplate, you can raise an issue in **https://github.com/sumitjoshi97/react-boiler/issues**.
