const sequelize = require('./db/database');
const Usuario = require('./models/Usuario');

async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); // Ajusta la BD si hay cambios en el modelo
    console.log('✅ Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('❌ Error al sincronizar la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
