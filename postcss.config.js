const tailwindcss = require("tailwindcss")
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})
const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  plugins: [
    tailwindcss(),
    postcssPresetEnv(),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
}
