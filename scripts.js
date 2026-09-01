const pokemonName = document.querySelector('.pokemon_nome');
          const pokemonNumber = document.querySelector('.pokemon_numero');
          const pokemonImage = document.querySelector('.pokemon_imagem');
          
          const form = document.querySelector('.form');
          const input = document.querySelector('.input_pesquisa');
          const btnPrev = document.querySelector('.btn-prev');
          const btnNext = document.querySelector('.btn-next');
          
          let searchPokemon = 1;
          
              const fetchPokemon = async(pokemon) => {
                    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                    
                    if (APIResponse.status === 200) {
                    const data = await APIResponse.json();
                    return data;
                    }
              }
              const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';
    pokemonImage.style.display = 'none'; // Esconde a imagem enquanto carrega

    const data = await fetchPokemon(pokemon);

    if (data) {
        searchPokemon = data.id;

        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;

        // Tenta pegar o animado; se não existir, usa o sprite estático padrão
        const spriteAnimado = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        const spriteEstatico = data['sprites']['front_default'];

        pokemonImage.src = spriteAnimado || spriteEstatico;
        pokemonImage.style.display = 'block'; // Exibe a imagem após definir a fonte

        input.value = '';
    } else {
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none'; // Esconde o ícone de imagem quebrada
    }
}
          form.addEventListener('submit',(event) => {
                event.preventDefault();
                
                renderPokemon(input.value.toLowerCase()); //toLowerCase serve pra quando o usuario digitar com letra maiuscula ou minuscula nao dar erro depois.  
                             
          });
          
          btnPrev.addEventListener('click', () => {
              if (searchPokemon > 1) {
                  searchPokemon -= 1;
                  renderPokemon(searchPokemon);
              }
          });

          btnNext.addEventListener('click', () => {
                searchPokemon += 1;
                renderPokemon(searchPokemon);      
          });
                
          renderPokemon(searchPokemon);
