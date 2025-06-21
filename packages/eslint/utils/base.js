const prettierConfig = require("@realdangol/front-prettier-config");

module.exports = {
  extends: ["prettier", "eslint:recommended"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": [
      "error",
      prettierConfig,
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    eqeqeq: "error",
  },
};
