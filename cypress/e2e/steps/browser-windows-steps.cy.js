describe('Browser Windows - ToolsQA', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/browser-windows');
      cy.get('.category-cards > :nth-child(3)').contains('Alerts, Frame & Windowns').click();
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').contains('Browser Windows').click({force:true})
    });
  
    it('Abre nova janela e valida o texto', () => {
      // Interceptar a nova aba
      cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen');
      });
  
      // Clicar no botão
      cy.contains('New Window').click();
      cy.get('@windowOpen').should('be.called');
      
      // Validar conteúdo da nova aba simulada
      cy.visit('https://demoqa.com/sample');
      cy.contains('This is a sample page').should('be.visible');
    });
  });
  