const express = require('express');

const {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registration.controller');

const registrationRouter = express.Router();

registrationRouter.post('/', createRegistration);

registrationRouter.get('/', getAllRegistrations);

registrationRouter.get('/:id', getRegistrationById);

registrationRouter.patch('/:id', updateRegistration);

registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
