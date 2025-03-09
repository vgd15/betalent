# Projeto Betalent

Descrição

Este projeto é uma aplicação React que exibe uma lista de funcionários, permitindo filtragem dinâmica baseada em qualquer campo da tabela. Os dados são consumidos a partir de uma API local simulada com JSON Server.

Pré-requisitos

Para rodar o projeto, você precisa ter instalado:

Node.js

NPM ou Yarn

Instalação

Clone o repositório: https://github.com/vgd15/betalent

Instale as dependências: npm install

ou yarn install

# Rodando a API local

Este projeto utiliza JSON Server para simular uma API.
Para rodar a API local, execute o seguinte comando:

npx json-server --watch src/components/backend/db.json --port 5000

# Rodando o projeto

Após iniciar a API local, inicie a aplicação React com:

npm start

Ou, se estiver usando Yarn:

yarn start

# Funcionalidades

Listagem de funcionários consumindo uma API local

Filtro de pesquisa em tempo real

Formatação de datas e números de telefone

Expansão de detalhes ao clicar no botão na versão mobile

📂 betalent
 ├── 📂 public
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── 📂 backend
 │   │   │   ├── db.json  # Dados da API local
 │   │   ├── 📂 home
 │   │   │   ├── home.jsx  # Página principal
 │   │   │   ├── home.css  # Estilos
 │   │   ├── 📂 header
 │   │   │   ├── header.jsx  # Cabeçalho
 │   │   │   ├── header.css  # Estilos do cabeçalho
 │   ├── App.js
 │   ├── index.js
 ├── package.json
 ├── README.md

 