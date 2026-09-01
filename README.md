# Pokédex 🔴⚡

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)

> Uma Pokédex interativa desenvolvida em JavaScript Vanilla que consome dados em tempo real da PokéAPI, exibindo sprites animados e informações dos Pokémon.

---

## 💻 Sobre o Projeto

A **Pokédex Web** é uma aplicação front-end que simula o dispositivo clássico do universo Pokémon. Ela permite pesquisar qualquer Pokémon pelo **nome** ou **número de identificação (ID)**, além de permitir a navegação sequencial pelos botões da interface.

O projeto se destaca pelo uso de requisições assíncronas com `async/await` e `fetch` para consumir a [PokéAPI](https://pokeapi.co/), exibindo os sprites animados dos Pokémon da 5ª Geração (*Black & White*) com *fallback* automático para sprites estáticos.

---

## ⚙️ Funcionalidades

- **Pesquisa Inteligente:** Busca de Pokémon por nome ou ID, ignorando letras maiúsculas/minúsculas (`toLowerCase`).
- **Navegação Interativa:** Botões "Anterior" e "Próximo" para percorrer a Pokédex sequencialmente.
- **Sprites Animados:** Exibição de GIFs animados dos Pokémon em tempo real.
- **Tratamento de Erros:** Exibição de estado de carregamento (*Carregando...*) e mensagem de erro amigável (*Não encontrado*) caso o Pokémon não exista.
- **Interface Fiel:** Layout estilizado em CSS para simular o design físico da Pokédex clássica.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação da Pokédex, formulário de pesquisa, botões de controle e contêineres de imagem/texto.
- **CSS3:** Estilização responsiva, posicionamento absoluto dos elementos na tela da Pokédex e manipulação de layout.
- **JavaScript (ES6+):**
  - **Consumo de API:** Requisições HTTP dinâmicas usando `fetch` e `async/await`.
  - **Manipulação do DOM:** Atualização dinâmica de imagens, textos e limpeza automática do campo de input.
  - **Manipulação de Eventos:** Tratamento do envio do formulário (`submit`) e cliques dos botões (`click`).

---

## 📁 Estrutura do Arquivo

```text
├── index.html     # Estrutura HTML da Pokédex
├── style.css      # Estilização visual e posicionamento dos elementos
└── script.js      # Lógica de integração com a PokéAPI e manipulação do DOM
