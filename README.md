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

- Classic Typescript project such as NodeJS or Cloud Functions: `@screamz/aurora/tslint-common`
- React project: `@screamz/aurora/tslint-react`

Good to go!

## Good to know

Some rules are handled by Prettier and have been desactived in tslint to avoid conflicts thanks to both `tslint-config-prettier` & `tslint-plugin-prettier`.

# Extending ?

- If you want to extends the built-in Prettier config:

The `package.json` method does not offer a way to extend the configuration to overwrite some properties from the shared configuration. If you need to do that, import the file in a `.prettierrc.js` file and export the modifications, e.g:

```js
module.exports = {
  ...require("@screamz/aurora"),
  semi: false
};
```

- If you want to extends the tslint configuration

It's simple as adding rules in your `tslint-config.json`

```JSON
{
  "extends": "@screamz/aurora/tslint-react",
  "rules": {
    "interface-name": false,
  }
}
```
