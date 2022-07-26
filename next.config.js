/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["jhq-ui"]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});