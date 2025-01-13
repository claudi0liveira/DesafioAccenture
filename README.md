# DesafioAccenture

Desafio de automação E2E usando Cypress. Abaixo, informações de como fazer o projeto rodar:

Pré-requisitos

**Certifique-se de ter o Node.js instalado (recomendado: LTS).
Ter o npm (incluído com o Node.js) ou o yarn instalado.**

Passo a passo para instalar o Cypress
1. Abra o terminal e vá para o diretório do seu projeto:

mkdir meu-projeto
cd meu-projeto
npm init -y

2. Instale o Cypress
Usando npm:
npm install cypress --save-dev

3. Configurar o Cypress com cypress-file-upload:
4. 
Instalar a dependência cypress-file-upload:
npm install --save-dev cypress-file-upload

Abra o arquivo **cypress/support/commands.js** e adicione a seguinte linha:
import 'cypress-file-upload';

