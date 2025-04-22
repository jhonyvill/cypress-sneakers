const { defineConfig } = require("cypress");
const env = require("./cypress.env.json");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    baseUrl: env[process.env.CYPRESS_ENV]?.baseUrl || "http://localhost:5173/",
    experimentalRunAllSpecs: true,
  },
});
