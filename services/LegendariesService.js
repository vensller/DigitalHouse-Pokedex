const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: () => {
        const mewTwo = new LegendaryModel(
            1, 
            'MewTwo', 
            "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
            'Psychic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');    
        const moltres =  new LegendaryModel(
            2, 
            'Moltres', 
            "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
            'Flame',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000');          
        return [mewTwo, moltres];
    },
    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendaries(); 
        const pokemon = pokemonList.find(item => item.name === pokemonName);
        return pokemon;
    }
}

module.exports = LegendariesService;