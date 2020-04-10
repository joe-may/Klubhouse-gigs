var router = require('express').Router();
var passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

///// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/students',
    failureRedirect : '/students'
  }
));

module.exports = router;