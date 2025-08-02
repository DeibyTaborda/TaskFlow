const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  objectiveId: {
    type: DataTypes.INTEGER,
    allowNull: true // porque puede no estar ligada a un objective
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'tasks',
  timestamps: true
});

module.exports = Task;
