Feature: Gerenciamento de registros na tabela web

  Scenario: Criar e excluir um registro
    Given que o usuário está na página de tabelas web
    When o usuário cria um novo registro
    Then o registro deve ser exibido na tabela
    When o usuário pesquisa e exclui o registro
    Then o registro não deve mais estar na tabela

  Scenario: Criar 3 registros dinamicamente e excluí-los
    Given que o usuário está na página de tabelas web
    When o usuário cria 3 registros dinamicamente
    Then os registros devem ser exibidos na tabela
    When o usuário exclui todos os registros
    Then nenhum registro deve estar presente na tabela
