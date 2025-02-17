const { DataTypes } = require('sequelize');
const sequelize = require('./../db/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('ADMIN', 'USUARIO'),
    allowNull: false,
    defaultValue: 'USUARIO',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'usuarios', // Nombre exacto de la tabla en la BD
  timestamps: false,     // Evita que Sequelize agregue createdAt y updatedAt
});

module.exports = Usuario;
