const base = require("./utils/base");
const react = require("./utils/react");
const typescript = require("./utils/typescript");

const recommended = {
  plugins: ["@dangol-dev"],
  extends: ["plugin:@dangol-dev/base"],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["plugin:@dangol-dev/typescript"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:@dangol-dev/react"],
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};

module.exports = {
  configs: { recommended, base, react, typescript },
};
