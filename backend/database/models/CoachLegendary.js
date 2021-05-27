module.exports = (sequelize, DataTypes) => {
    const CoachLegendary = sequelize.define("CoachLegendary", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        tableName: 'COACHES_LEGENDARIES',
        timestamps: false,
    }
    );

    CoachLegendary.associate = function(models) {
        CoachLegendary.belongsTo(models.Coach, {
            as: 'coaches',
            foreignKey: 'COACH_ID'
        });
        CoachLegendary.belongsTo(models.Legendary, {
            as: 'legendaries',
            foreignKey: 'LEGENDARIES_ID'
        });
    }

    return CoachLegendary;
};