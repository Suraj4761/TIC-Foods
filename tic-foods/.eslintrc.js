module.exports = {
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript features
    sourceType: "module", // Allow using import/export
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn", // Change from error to warning
    "@typescript-eslint/no-explicit-any": "warn", // Change from error to warning
    "no-constant-condition": "warn", // Change from error to warning
  },
};
