const { Registration } = require('../models/registration.model');

const createRegistration = async (req, res) => {
  try {
    const registration = await Registration.create({
      entranceTime: new Date(),
      exitTime: null,
    });

    res.status(201).json({
      status: 'success',
      registration,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      registrations,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    res.status(200).json({
      status: 'success',
      registration,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    if (registration.status !== 'working') {
      return res.status(400).json({
        status: 'error',
        message: 'The employed is not working',
      });
    }

    await registration.update({
      exitTime: new Date(),
      status: 'out',
    });

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    if (registration.status !== 'working') {
      return res.status(400).json({
        status: 'error',
        message: 'The employed is not working',
      });
    }

    await registration.update({
      status: 'cancelled',
    });

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
