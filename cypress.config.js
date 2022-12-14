const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      let httpServer
      on('file:preprocessor', cucumber())
      on('before:spec', (spec) => {
        httpServer = require('./server').startServer(3051)
      })
      on('after:spec', (spec) => {
        httpServer.close()
      })
    },
    specPattern: "**/*.{feature,features}"
  },
  video:false,
  screenshotOnRunFailure:false,
  experimentalInteractiveRunEvents:true
  
});
