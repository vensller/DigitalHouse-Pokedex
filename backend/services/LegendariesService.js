const database = require('../database/models/index');

const LegendariesService = {    
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
    },
    getById: async (id) => {
        return await database.Legendary.findByPk(id);
    },
    getAttributeById: async (id, attribute) => {
        return await database.Legendary.findByPk(id, {
            attributes: [attribute]
        });
    }
}

module.exports = LegendariesService;