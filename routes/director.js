const {
  createDirector,
  getAllDirectors,
  getDirector,
  updateDirector,
  deleteDirector,
} = require('../services/directorService');

const { directors } = require('../modules/docsToCreate.js');

const createDirectorRoutes = (app) => {
  app
    .route('/directors')
    .post(async (req, res) => {
      directors.forEach(async (directorObject) => {
        directorObject.birthdate = new Date(directorObject.birthdate).getTime();
        let director = await createDirector(directorObject);
        director.save();
      });
      return res.status(201).send('directors created');
    })
    .get(async (req, res) => {
      let list = await getAllDirectors();
      return res.status(201).send(list);
    });

  app
    .route('/directors/:directorId')
    .get(async (req, res) => {
      const director = await getDirector(req.params.directorId);
      return res
        .status(201)
        .send(`Director ${director.firstName} ${director.lastName} found.`);
    })
    .put(async (req, res) => {
      const director = await updateDirector(req.params.directorId, {
        firstName: 'Dmitriy',
      });
      return res
        .status(201)
        .send(`Director ${director.firstName} ${director.lastName} updated`);
    })
    .delete(async (req, res) => {
      const director = await getDirector(req.params.directorId);
      const name = `${director.firstName} ${director.lastName}`;
      await deleteDirector(req.params.directorId);
      return res.status(201).send(`Director ${name} deleted`);
    });
};

module.exports = { createDirectorRoutes };
