module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        precio: {
            type: dataTypes.INTEGER
        },
        codigo: {
            type: dataTypes.STRING
        },
        garantia: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER
        },
        destacado: {
            type: dataTypes.INTEGER
        },
        img: {
            type: dataTypes.STRING
        },
        tipo_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }

    const Productos = sequelize.define(alias, cols, config);
    return Productos;
}
