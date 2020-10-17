const Sequelize = require('sequelize');

//establishing connection with database
const db = new Sequelize('notes', 'yash', '', {
    host: 'localhost',
    dialect: 'mysql'
});
try {
    db.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = db;