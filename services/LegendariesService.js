const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: () => {
        const pineco = new LegendaryModel(1, 'Pineco', 'Melhor legendary que existe', 'bug');   
        const pikachu = new LegendaryModel(2, 'Pikachu', 'Segundo melhor legendary que existe', 'eletric');   
        return [pineco, pikachu];
    }
}

module.exports = LegendariesService;