// For all TS based projects
module.exports = {
  extends: [
    "tslint:recommended",
    "tslint-plugin-prettier",
    "tslint-config-prettier"
  ],
  rules: {
    prettier: true, // Add prettier support
    "interface-name": false, // Let name interface as you which (like Props or State for react)
    "member-access": { options: ["no-public"] }, // Don't be too obstrusive… It's default
    "no-console": false, // Especially useful in cloud functions.
    "variable-name": {
      // Allow to start with underscore to work with ts not used vars
      options: ["check-format", "allow-pascal-case", "allow-leading-underscore"]
    },
    "no-for-in": true, // Legacy
    "no-return-await": true, // Same effect, just faster
    "no-sparse-arrays": true, // Missing elements are probably an accidentally duplicated comma.
    "prefer-object-spread": true, // Object spread allows for better type checking and inference.
    "cyclomatic-complexity": true, // Require simple code (20 complexity by branching max)
    deprecation: true, // Deprecated should be upgraded.,
    "invalid-void": true, // Void is nothing, prefer undefined when combining
    "max-file-line-count": { options: [300] }, // Seriously, don't do too much in one file.
    "no-default-export": true, // https://palantir.github.io/tslint/rules/no-default-export/
    "no-duplicate-imports": true, // Improve readability,
    "object-literal-sort-keys": {
      // https://palantir.github.io/tslint/rules/object-literal-sort-keys/
      options: ["match-declaration-order", "shorthand-first"]
    },
    "file-name-casing": { options: { ".tsx": ["pascal-case", "snake-case"] } },
    "prefer-switch": true, // Over 3 if / else
    "unnecessary-else": true, // https://palantir.github.io/tslint/rules/unnecessary-else/
    "newline-before-return": false // This can be useful for oneliner
  },
  linterOptions: {
    exclude: ["node_modules/**/*"]
  }
};
