import express from 'express';
const router = express.Router();

export default router.route('/streak/:user_id/:streak_id')
.all(function (req, res, next) {
  // authenticate here?
  // check if user owns the streak
  next()
})
.post(function (req, res, next) {
  // use to create a user?
  next(new Error('not implemented'))
})
.delete(function (req, res, next) {
  // use to delete a user
  next(new Error('not implemented'))
})
