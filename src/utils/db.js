const { KaryawanModels, CutiModels } = require("../models/index");

async function migrateTables() {
  await KaryawanModels.sync({ force: true });
  await CutiModels.sync({ force: true });
}

async function syncDatabase() {
  try {
    await migrateTables();
    console.log('Database synced successfully.');
  } catch (error) {
    console.log('Error syncing tables:', error);
  }
}
syncDatabase()
