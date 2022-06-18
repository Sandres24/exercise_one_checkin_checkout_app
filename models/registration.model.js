const { db, DataTypes } = require('../utils/database.util');

// Registration model (Registrations table)
const Registration = db.define('registration', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'working',
    allowNull: false,
  },
});

module.exports = { Registration };
