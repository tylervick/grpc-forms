module.exports = {
    ...require('eslint-config-mantine/.prettierrc.js'),
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
    jsxSingleQuote: true,
    tabWidth: 2,
    plugins: ['prettier-plugin-organize-imports'],
}
