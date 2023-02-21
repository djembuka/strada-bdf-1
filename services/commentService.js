const { Comment } = require('../modules/models.js');

const createComment = (movieId, commentObject) => {
  return Comment.create({
    ...commentObject,
    movie: movieId,
    timestamp: Date.now(),
  });
};

const getAllMovieComments = (movieId) => {
  return Comment.find({});
};

const getComment = (commentId) => {
  return Comment.findById(commentId);
};

const updateComment = async (commentId, dataToUpdate) => {
  return await Comment.findByIdAndUpdate(commentId, dataToUpdate);
};

const deleteComment = async (commentId) => {
  await Comment.findByIdAndDelete(commentId);
  return;
};

module.exports = {
  createComment,
  getAllMovieComments,
  getComment,
  updateComment,
  deleteComment,
};
