const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config({path: "./.env"});

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db_pass = process.env.DB_PASS || "";

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: 'mysql'
});

try {
     sequelize.authenticate();
    console.log('Conexión exitosa compadre')
} catch (error) {
    console.error('Mi compadre, sucedió un error', error)
}

module.exports = sequelize;

