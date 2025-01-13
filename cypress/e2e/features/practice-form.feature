Feature: Submissão do formulário de prática

  Cenário: Preencher e enviar o formulário de prática
    Dado que o usuário está na página de formulários
    Quando o usuário preenche todos os campos e envia o formulário
    Então o formulário deve ser submetido com sucesso e a mensagem de confirmação deve ser exibida
