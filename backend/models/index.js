const sequelize = require('../config/db');
const User = require('./User');
const Goal = require('./Goal');
const Objective = require('./Objective');
const Task = require('./Task');

// Relaciones
User.hasMany(Goal, { foreignKey: 'userId' });
Goal.belongsTo(User, { foreignKey: 'userId' });

Goal.hasMany(Objective, { foreignKey: 'goalId' });
Objective.belongsTo(Goal, { foreignKey: 'goalId' });

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

Objective.hasMany(Task, { foreignKey: 'objectiveId' });
Task.belongsTo(Objective, { foreignKey: 'objectiveId' });

module.exports = {
  sequelize,
  User,
  Goal,
  Objective,
  Task
};