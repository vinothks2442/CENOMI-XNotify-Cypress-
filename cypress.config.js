const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://cenomi-xnotify-uat.thankfultree-83cac082.westeurope.azurecontainerapps.io/login?forceLogin=1",

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.args.push("--ignore-certificate-errors");
        launchOptions.args.push("--ignore-ssl-errors");
        launchOptions.args.push("--ignore-certificate-errors-spki-list");
        launchOptions.args.push("--allow-running-insecure-content");

        return launchOptions;
      });
    }
  }
});