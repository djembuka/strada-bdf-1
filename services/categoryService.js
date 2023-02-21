const { Category } = require('../modules/models.js');

const createCategory = (categoryObject) => {
  return Category.create(categoryObject);
};

const getAllCategories = () => {
  return Category.find({});
};

const getCategory = (categoryId) => {
  return Category.findById(categoryId);
};

const updateCategory = async (categoryId, dataToUpdate) => {
  return await Category.findByIdAndUpdate(categoryId, dataToUpdate);
};

const deleteCategory = async (categoryId) => {
  await Category.findByIdAndDelete(categoryId);
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
