const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Goal = sequelize.define('Goal', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'goals',
  timestamps: true
});

module.exports = Goal;
