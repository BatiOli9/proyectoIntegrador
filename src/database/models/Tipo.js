module.exports = (sequelize, dataTypes) => {
    let alias = "Tipos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "tipos",
        timestamps: false
    }

    const Tipo = sequelize.define(alias, cols, config);

    return Tipo;
}