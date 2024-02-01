/** @type {import("prettier").Config} */
export default {
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false
      }
    },
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro'
      }
    }
  ]
}
