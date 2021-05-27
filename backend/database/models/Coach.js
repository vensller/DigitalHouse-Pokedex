module.exports = (sequelize, DataTypes) => {
    const Coach = sequelize.define("Coach", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),            
        },        
    },
    {
        tableName: 'COACHES',
        timestamps: false,
    }
    );

    Coach.associate = function(models) {
        Coach.belongsToMany(models.Legendary, {
            through: models.CoachLegendary,
            foreignKey: 'COACH_ID',
            otherKey: 'LEGENDARIES_ID'
        });
    }

    return Coach;
};
