const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Objective = sequelize.define('Objective', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  goalId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
    defaultValue: 'pending'
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'objectives',
  timestamps: true
});

module.exports = Objective;
