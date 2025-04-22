# cypress-sneakers

Este projeto foi desenvolvido para prática de automação de testes com Cypress, sendo utilizada a aplicação [Sneakers E-commerce Product Page](https://jvs-sneakers-product-page.netlify.app) como base para realização dos testes.

Você encontrará a aplicação front-end desenvolvida no seguinte repositório do github: [sneakers-ecommerce](https://github.com/jhonyvill/sneakers-ecommerce).

A documentação e mapeamento das funcionalidades utilizadas como base da automação estão no repositório do github: [qa-sneakers-ecommerce](https://github.com/jhonyvill/qa-sneakers-ecommerce).

Vale destacar que existem testes que irão falhar de forma proposital nesta automação, pois, como mencionado no projeto de documentação e mapeamento das funcionalidades citado acima, foi adicionada à aplicação front-end comportamentos indesejados(bugs) com intuito de praticar a criação de relatórios de bugs.

## Pré-requisitos

Para executar este projeto, será necessário que você tenha instalado o Git, Node.js e npm na sua máquina.

Foram utilizadas as versões Git(2.43.0), Node.js(22.3.0) e npm(10.8.1), recomendo que utilize as mesmas ou versões mais atualizadas.

## Instalação

Após clonar o projeto e abrir na sua máquina, execute no terminal o comando `npm install` para instalar as dependências de desenvolvimento.

## Execução

Execute o comando `npm run cy:open:prod` no terminal para execução em modo interativo.

Esse comando irá abrir a interface do Cypress para que você possa selecinar quais testes deseja executar.

Caso tenha interesse na execução sem abrir a interface do Cypress, no modo headless, execute o comando `npm run test:prod`.

## Execução local

Caso tenha interesse em executar os testes rodando a aplicação front-end localmente, basta clonar o [projeto front-end](https://github.com/jhonyvill/sneakers-ecommerce) e seguir o passo a passo para executá-lo.

Com o projeto front-end em execução localmente, abra o terminal no projeto de automação Cypress e execute o comando `npm run cy:open:dev` ou `npm run test:dev`.
