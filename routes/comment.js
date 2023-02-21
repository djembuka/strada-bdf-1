const {
  createComment,
  getAllMovieComments,
  getComment,
  updateComment,
  deleteComment,
} = require('../services/commentService');

const createCommentRoutes = (app) => {
  app
    .route('/movies/:movieId/comments')
    .post(async (req, res) => {
      await createComment(req.params.movieId, {
        author: 'Tatiana',
        text: 'Some comment',
      });
      return res.status(201).send('Comment added');
    })
    .get(async (req, res) => {
      let list = await getAllMovieComments(req.params.movieId);
      return res.status(201).send(list);
    });

  app
    .route('/movies/comments/:commentId')
    .get(async (req, res) => {
      const comment = await getComment(req.params.commentId);
      return res.status(201).send(`Comment by ${comment.author} found.`);
    })
    .put(async (req, res) => {
      await updateComment(req.params.commentId, { text: 'New text' });
      const comment = await getComment(req.params.commentId);
      return res.status(201).send(`The comment now is: ${comment.text}`);
    })
    .delete(async (req, res) => {
      await deleteComment(req.params.commentId);
      return res.status(201).send('Comment deleted');
    });
};

module.exports = { createCommentRoutes };
