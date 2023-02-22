const { Director } = require('../modules/models.js');

const createDirector = (directorObject) => {
  return Director.create(directorObject);
};

const getAllDirectors = () => {
  return Director.find({});
};

const getDirector = (directorId) => {
  return Director.findById(directorId);
};

const updateDirector = async (directorId, dataToUpdate) => {
  return await Director.findByIdAndUpdate(directorId, dataToUpdate);
};

const deleteDirector = async (directorId) => {
  await Director.findByIdAndDelete(directorId);
  return;
};

module.exports = {
  createDirector,
  getAllDirectors,
  getDirector,
  updateDirector,
  deleteDirector,
};
