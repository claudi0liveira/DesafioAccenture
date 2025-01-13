import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário está na página de tabelas web', () => {
  cy.visit('https://demoqa.com/');
  cy.get('.category-cards > :nth-child(1)').contains('Elements').click();
  cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').contains('Web Tables').click();
});

When('o usuário cria um novo registro', () => {
  cy.get('#addNewRecordButton').click();
  cy.get('#firstName').type('Claudio');
  cy.get('#lastName').type('Oliveira');
  cy.get('#userEmail').type('claudioliveira@example.com');
  cy.get('#age').type('28');
  cy.get('#salary').type('7000');
  cy.get('#department').type('Test Analyst');
  cy.get('#submit').click();
});

Then('o registro deve ser exibido na tabela', () => {
  cy.contains('Claudio').should('exist');
});

When('o usuário pesquisa e exclui o registro', () => {
  cy.get('#searchBox').type('Claudio{enter}');
  cy.get('#delete-record-4').click({ force: true });
});

Then('o registro não deve mais estar na tabela', () => {
  cy.contains('Claudio').should('not.exist');
});

When('o usuário cria 3 registros dinamicamente', () => {
  for (let i = 1; i <= 3; i++) {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(`Usuário ${i}`);
    cy.get('#lastName').type(`Criado para teste ${i}`);
    cy.get('#userEmail').type(`usuariocpt${i}@qaexample.com`);
    cy.get('#age').type(`${20 + i}`);
    cy.get('#salary').type(`${2000 + i * 100}`);
    cy.get('#department').type('Suporte Técnico Jr');
    cy.get('#submit').click();
  }
});

Then('os registros devem ser exibidos na tabela', () => {
  for (let i = 1; i <= 3; i++) {
    cy.contains(`Usuário ${i}`).should('exist');
  }
});

When('o usuário exclui todos os registros', () => {
  cy.get('[id^="delete-record-"]').each(($el) => {
    cy.wrap($el).click({ force: true });
  });
});

Then('nenhum registro deve estar presente na tabela', () => {
  cy.get('[id^="delete-record-"]').should('not.exist');
});
