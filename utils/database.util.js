const { Sequelize, DataTypes } = require('sequelize');

// Connecting to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Sergi*123',
  port: 5432,
  database: 'Exercise1',
});

module.exports = { db, DataTypes };
