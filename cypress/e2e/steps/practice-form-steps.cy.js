describe('Forms - ToolsQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com');
      cy.get('.category-cards > :nth-child(2)').contains('Forms').click();
      cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').contains('Practice Form').click();
    })    
    
   it('Preenche e envia o formulário', () => {
    // Preencher campos
    cy.get('#firstName').type('Claudio'),
    cy.get('#lastName').type('Oliveira'),
    cy.get('#userEmail').type('claudioliveira@example.com'),
    cy.get('#gender-radio-1.custom-control-input').check({ force: true }),
    cy.get('#userNumber').type('81977223344'),
    cy.get('#dateOfBirthInput').click(),
    cy.get('.react-datepicker__day--020').click(),
    cy.get('#subjectsInput').type('Computer Science{enter}'),
    cy.get('#hobbies-checkbox-1').check({ force: true }),
    cy.get('#uploadPicture').attachFile('persona.png'),
    cy.get('#currentAddress').type('123 Alameda do Eldorado.');
    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click(),
    cy.get('#react-select-3-option-1').click({force: true}),
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click(),
    cy.get('#react-select-4-option-0').click({force: true});

    // Submeter
    cy.get('#submit').click();

   // Validar e fechar popup
    cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form')
    cy.get('#closeLargeModal').click({force: true});
  })
})