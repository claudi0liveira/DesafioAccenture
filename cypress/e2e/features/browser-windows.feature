Feature: Interação com novas janelas do navegador

  Cenário: Abrir uma nova janela e validar o texto
    Dado que o usuário está na página "Browser Windows"
    Quando o usuário clica no botão para abrir uma nova janela
    Então a nova janela deve ser aberta e o conteúdo da página deve ser exibido
