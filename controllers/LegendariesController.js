const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req, res) => {
        const legendariesList = LegendariesService.listLegendaries();             
        res.json(legendariesList);
    }
}

module.exports = controller;