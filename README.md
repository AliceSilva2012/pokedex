# ⚡ Pokédex 🔍

> Aplicação interativa em JavaScript Vanilla desenvolvida para simular a Pokédex clássica, consumindo dados dinâmicos via integração REST com a PokéAPI.

---

### 🎯 Objetivo do Projeto
O projeto foi construído para praticar **assincronismo no JavaScript**, requisições HTTP e manipulação avançada do DOM. A interface recria a experiência de uso da Pokédex, permitindo consultar dados e sprites animadas de mais de 1.000 Pokémon cadastrados na base de dados global.

---

### 🛠️ Recursos & Arquitetura

- **Consumo Assíncrono (`Async/Await`):** Utilização do método `fetch()` para realizar requisições de dados em tempo real à [PokéAPI](https://pokeapi.co/).
- **Renderização Dinâmica de Sprites:** Tratamento de caminhos aninhados da API para buscar GIFs animados da 5ª Geração (*Black & White*), com sistema de *fallback* para imagens estáticas.
- **Filtro de Busca Tolerante:** Trata entradas do usuário removendo divergências entre caixa alta e baixa (`toLowerCase()`), permitindo busca por **Nome** ou **ID**.
- **Controle Sequencial de Estado:** Variável de controle interna para navegação fluida através dos botões *Anterior* (`btnPrev`) e *Próximo* (`btnNext`).
- **Tratamento de Exceções & UX:**
  - Exibição de feedback visual de *loading* durante a requisição.
  - Ocultamento dinâmico de elementos visuais para evitar exibição de links quebrados (`display: none`).
  - Limpeza automática do campo de busca após a confirmação.

---

### 🧱 Tecnologias Aplicadas

| Camada | Tecnologia | Aplicação |
| :--- | :--- | :--- |
| **Interface** | HTML5 Semântico | Formulários, estruturas de exibição e controles |
| **Estilização** | CSS3 Moderno | Layout responsivo e alinhamento do display LCD |
| **Lógica** | JavaScript (ES6+) | Requisições à API, eventos do DOM e controle de fluxo |
| **Dados** | PokéAPI (REST) | Fonte de dados e assets de imagens/sprites |

---

### 🕹️ Fluxo de Funcionamento (JS)

1. **`fetchPokemon(pokemon)`**: Executa a chamada HTTP para a rota `/pokemon/{id_ou_nome}` e valida o *status code* `200 OK`.
2. **`renderPokemon(pokemon)`**: Atualiza o estado da tela (limpa campos, esconde a imagem temporariamente), processa o JSON retornado e atribui os novos valores às tags do DOM.
3. **Event Listeners**: Captura o evento `submit` do formulário prevenindo o comportamento padrão (`preventDefault()`) e escuta os disparos de clique dos botões de paginação.

---

### 🚀 Como Testar Localmente

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/pokedex-web.git](https://github.com/seu-usuario/pokedex-web.git)

# 2. Acesse a pasta do projeto
cd pokedex-web

# 3. Abra o arquivo index.html no navegador
