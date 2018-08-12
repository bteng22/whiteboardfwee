const passport = require('passport');
const User = require('../models/User');

const refererSignup = async (req, res, next) => {
  console.log('+++REQ', req.body);
  passport.authenticate('local-signup', ({ error, user, info }) => {
    console.log('+++', req.body);
    if (error) {
      return res.send(500);
    }
    if (!user) {
      return res.send(409);
    }
    console.log('+++', );
    return res.send(201);
  })(req, res, next);
};

module.exports = {
  refererSignup
};
