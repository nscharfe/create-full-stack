// Adapted from
// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "unicorn",
    "simple-import-sort",
  ],
  extends: [
    "react-app",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Ignore "up" and "down" migration methods generated by typeorm.
    // https://typeorm.io/#/migrations/creating-a-new-migration
    // Found in the templates in packages/server/src/migration/
    "class-methods-use-this": ["error", { exceptMethods: ["up", "down"] }],
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "import/prefer-default-export": "off",
    // Overload airbnb definition to allow 'ForOfStatement'
    // https://github.com/airbnb/javascript/blob/b6fc6dc7c3cb76497db0bb81edaa54d8f3427796/packages/eslint-config-airbnb-base/rules/style.js#L257
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-shorthand": "error",
    "react/jsx-props-no-spreading": "off",
    "simple-import-sort/sort": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        // Ignore migration files generated by typeorm.
        // https://typeorm.io/#/migrations/creating-a-new-migration
        // Found in the templates in packages/server/src/migration/
        ignore: [/\d+-.+ts/],
      },
    ],
    // TODO: #94 Update eslint-config-create-full-stack packages when create-react-app v4.0 is released
    // Fixes https://github.com/sindresorhus/eslint-plugin-unicorn/issues/755
    // Which was fixed in https://github.com/sindresorhus/eslint-plugin-unicorn/pull/756
    // But requires https://github.com/facebook/create-react-app/pull/8978
    // Which isn't released yet. It's tracked https://github.com/facebook/create-react-app/milestone/69
    "unicorn/no-fn-reference-in-iterator": "off",
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    // TypeScript can infer return types
    // https://www.typescriptlang.org/docs/handbook/type-inference.html
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
  },
  ignorePatterns: [
    "node_modules",
    "build",
    // graphql-codegen and mobile (expo)
    "__generated__",
    // web (CRA)
    "react-app-env.d.ts",
    "serviceWorker.ts",
    "setupTests.ts",
    // mobile (expo)
    "babel.config.js",
    "metro.config.js",
  ],
};