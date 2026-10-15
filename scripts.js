const pokemonName = document.querySelector('.pokemon_nome');
const pokemonNumber = document.querySelector('.pokemon_numero');
const pokemonImage = document.querySelector('.pokemon_imagem');

const form = document.querySelector('.form');
const input = document.querySelector('.input_pesquisa');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let searchPokemon = 1;

// Áudio
let cryLatest = null; // grito mais recente (som mais limpo)
let cryLegacy = null; // grito dos jogos antigos (som 8 bits)
let usarLegacy = false; // false = latest, true = legacy
let audioAtual = null; // guarda o áudio que está tocando pra poder parar ele

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Carregando...';
    pokemonNumber.innerHTML = '';
    pokemonImage.style.display = 'none'; // Esconde a imagem enquanto carrega

    const data = await fetchPokemon(pokemon);

    if (data) {
        searchPokemon = data.id;

        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;

        // Guarda os dois links de grito que vêm no mesmo JSON
        cryLatest = data.cries?.latest || null;
        cryLegacy = data.cries?.legacy || null;

        // Tenta pegar o animado; se não existir, usa o sprite estático padrão
        const spriteAnimado = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        const spriteEstatico = data['sprites']['front_default'];

        pokemonImage.src = spriteAnimado || spriteEstatico;
        pokemonImage.style.display = 'block'; // Exibe a imagem após definir a fonte

        input.value = '';
    } else {
        cryLatest = null;
        cryLegacy = null;
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';
        pokemonImage.style.display = 'none'; // Esconde o ícone de imagem quebrada
    }
};

form.addEventListener('submit', (event) => {
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

// Tocar o grito (um único listener)
pokemonImage.addEventListener('click', () => {
    // Escolhe qual grito usar; se o preferido não existir, usa o outro
    const link = usarLegacy ? (cryLegacy || cryLatest) : (cryLatest || cryLegacy);
    if (!link) return; // sem grito disponível, não faz nada

    // Para o áudio anterior pra não sobrepor os sons
    if (audioAtual) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    audioAtual = new Audio(link);
    audioAtual.volume = 0.3; // vai de 0 a 1; gritos podem ser altos!
    audioAtual.playbackRate = 1; // teste 1.2 se achar o som lento
    audioAtual.play().catch((erro) => console.log('Erro:', erro));
});

// Tecla L alterna entre latest e legacy
document.addEventListener('keydown', (e) => {
    if (e.target === input) return; // não alterna enquanto você digita a pesquisa
    if (e.key.toLowerCase() === 'l') {
        usarLegacy = !usarLegacy;
        console.log(usarLegacy ? 'Modo: legacy (8 bits)' : 'Modo: latest (limpo)');
    }
});

renderPokemon(searchPokemon);
