const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);        

        return res.json(legendary);
    }
}

module.exports = controller;