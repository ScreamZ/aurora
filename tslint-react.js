module.exports = {
  extends: ["tslint-react", "tslint-react-hooks", "./tslint-common.js"],
  rules: {
    "react-hooks-nesting": true, // Nesting hooks checker
    "jsx-no-lambda": false // Nothing bad with lambdas, fix it on a case-by-case basis
  }
};
