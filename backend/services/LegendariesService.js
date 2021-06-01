const LegendaryModel = require('../models/LegendaryModel');

const database = require('../database/models/index');

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
        let pokemon = pokemonList.find(item => item.name === pokemonName);

        if (!pokemon) {
            pokemon = pokemonList[0];
        }

        return pokemon;
    },
    createLegendary: async (
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense
        ) => {      
        const newLegendary = await database.Legendary.create({
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        });     
        return newLegendary;   
    },
    getLegendaryList: async () => {        
        const resultados = await database.Legendary.findAll(); 
        // const resultados = await database.sequelize.query("select * from legendaries", {
        //     type: database.Sequelize.QueryTypes.SELECT,
        // });
        return resultados;       
    },
    updateLegendary: async ( 
        id, 
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience,
        specialDefense) => {

        const updatedLegendary = await database.Legendary.update({
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        }, {
            where: {
                id                
            }
        });     

        return updatedLegendary;  
    },
    destroyLegendary: async(id) => {
        const destroyedLegendary = await database.Legendary.destroy({
            where: { 
                id
            }
        });
        return destroyedLegendary;
    }
}

module.exports = LegendariesService;