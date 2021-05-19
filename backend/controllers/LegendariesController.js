const LegendariesService = require('../services/LegendariesService');
const { validationResult } = require('express-validator');

const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    },
    indexAll: async (req, res) => {
        const list = await LegendariesService.getLegendaryList();
        return res.json(list);
    },
    create: async (req, res) => {
        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;

        const legendary = await LegendariesService.createLegendary(
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        );
        
        return res.json(legendary);
    },
    update: (req, res) => { 
        const { id } = req.params;
        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience,
            specialDefense
        } = req.body;

        res.json();       
    }
}

module.exports = controller;