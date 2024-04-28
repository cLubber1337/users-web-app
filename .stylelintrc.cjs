module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-scss'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': null,
    'at-rule-no-unknown': null,
    'selector-class-pattern': [
      '^([a-z][a-zA-Z0-9]*|((?:[A-Z][a-z0-9]*)+))(-[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab-case or camelCase',
        severity: 'error'
      }
    ],
    'import-notation': 'string'
  }
};
