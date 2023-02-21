const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require('../services/categoryService');

const { categories } = require('../modules/docsToCreate.js');

const createCategoryRoutes = (app) => {
  app
    .route('/categories')
    .post(async (req, res) => {
      categories.forEach(async (categoryObject) => {
        let category = await createCategory(categoryObject);
        category.save();
      });
      return res.status(201).send('categories created');
    })
    .get(async (req, res) => {
      let list = await getAllCategories();
      return res.status(201).send(list);
    });

  app
    .route('/categories/:categoryId')
    .get(async (req, res) => {
      const category = await getCategory(req.params.categoryId);
      return res.status(201).send(`Category ${category.title} found.`);
    })
    .put(async (req, res) => {
      const category = await updateCategory(req.params.categoryId, {
        title: 'musicals',
      });
      const newCategory = await getCategory(req.params.categoryId);
      return res
        .status(201)
        .send(
          `The category "${category.title}" updated, now it's "${newCategory.title}"`
        );
    })
    .delete(async (req, res) => {
      const category = await getCategory(req.params.categoryId);
      const title = category.title;
      await deleteCategory(req.params.categoryId);
      return res.status(201).send(`Category ${title} deleted`);
    });
};

module.exports = { createCategoryRoutes };
