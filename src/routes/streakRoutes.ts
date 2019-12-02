import express from 'express';
const router = express.Router();

export default router.route('/streak/:user_id/:streak_id')
.all(function (req, res, next) {
  // authenticate here?
  next()
})
.get(function (req, res, next) {
  // get the user being requested
  next(new Error('not implemented'))
})
.put(function (req, res, next) {
  // update something about the user
  // save user ... etc
  next(new Error('not implemented'))
})
.post(function (req, res, next) {
  // use to create a user?
  next(new Error('not implemented'))
})
.delete(function (req, res, next) {
  // use to delete a user
  next(new Error('not implemented'))
})
