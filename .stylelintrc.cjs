module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-scss'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['forward', 'mixin', 'if', 'include', 'else']
      }
    ]
  }
};
