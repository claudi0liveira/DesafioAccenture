const { defineConfig } = require('cypress');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configura o Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configura o pré-processador com esBuild
      on(
        'file:preprocessor',
        createBundler({
          plugins: [
            nodePolyfills(),
            createEsbuildPlugin(config), // Usa a configuração do Cypress
          ],
        })
      );
      config.env.stepDefinitions = 'cypress/e2e/steps/**/*.js'; // Caminho para as definições de passos
      // Retorna a configuração
      return config;
    },
    specPattern: [
      '**/*.feature',  // Reconhece os arquivos .feature
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Reconhece os arquivos de teste Cypress
    ],
  },
});
