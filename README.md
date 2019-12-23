<h1 align="center">
  Aurora
</h1>
<p align="center">
    <img src="./logo.png" alt="Logo Aurora" width="300">
</p>
<h4 align="center">A set of configs and rules for Typescript projects.</h4>

- **Prettier**. Code formatter
- **Tslint**. Typescript files linter

# Installation and dependencies

Install dependencies using npm or yarn:

`yarn add -D tslint prettier @screamz/aurora`

Edit your `package.json` and add `"prettier": "@screamz/aurora"` to use the built-in prettier config.

Then chose your tslint config depending on your project type and add it to your tslint.json `extends` key:

- Classic Typescript project such as node or cloud functions: `@screamz/aurora/tslint-common`
- React project: `@screamz/aurora/tslint-react`

Good to go!
