const LegendariesService = require('../services/LegendariesService');
const database = require('../database/models');
// MVCS - MODEL / VIEW / CONTROLLER / SERVICE

// PAREDE = VIEW
// CONTROLLER = PEDREIRO / Mestre de obras
// SERVICE = SERVENTE DO PEDREIRO
// MODEL = CIMENTO / TIJOLO

// VIEW = LAYOUT / DESENHO
// CONTROLLER = ARTICULADOR / MEIO DE CAMPO / INTERMEDIADOR
// SERVICE = 
// MODEL = INFORMAÇÃO

const controller = {  
    indexById: async (req, res) => {
        const { id } = req.params;
        const legendary = await LegendariesService.getById(id);

        if (!legendary) {
            return res.status(404).json({error: `Legendary ${id} not found`})
        }

        return res.json(legendary);
    },
    indexByIdAndAttribute: async (req, res) => {
        const { id, attribute } = req.params;
        
        const legendary = await LegendariesService.getAttributeById(id, attribute);

        if (!legendary) {
            return res.status(404).json({error: `Legendary ${id} not found`})
        }
        
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
    update: async (req, res) => { 
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

        const updatedLegendary = await LegendariesService.updateLegendary(
            id, 
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

        res.json(updatedLegendary);       
    },
    destroy: async (req, res) => {
        const { id } = req.params;

        const destroyedLegendary = await LegendariesService.destroyLegendary(id);

        return res.json(destroyedLegendary);
    }
}

module.exports = controller;