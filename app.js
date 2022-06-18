const express = require('express');

// Routers
const { registrationRouter } = require('./routes/resgistration.routes');

// Utils
const { db } = require('./utils/database.util');

// Init express app
const app = express();

// middlewares
app.use(express.json());

// Define endpoints
app.use('/api/v1/registrations', registrationRouter);

// Starting server
app.listen(4000, () => {
  console.log('Express app running on port 4000');
});

db.authenticate()
  .then(() => console.log('Db athenticated'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Db synced'))
  .catch((err) => console.log(err));
