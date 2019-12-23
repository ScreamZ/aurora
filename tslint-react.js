module.exports = {
  extends: ["tslint-react", "tslint-react-hooks", "./tslint-common.js"],
  rules: {
    "react-hooks-nesting": true, // Nesting hooks checker
    "jsx-no-lambda": {
      // Just warn because this is not critical everywhere.
      severity: "warning"
    }
  }
};
