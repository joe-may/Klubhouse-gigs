var router = require('express').Router();
var studentsCtrl = require('../controllers/students');



function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

// GET /students
router.get('/students', studentsCtrl.index);
router.get('/students/newest', studentsCtrl.new);
// router.get('/:id', flightsCtrl.show)
// router.post('/', flightsCtrl.create)

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', isLoggedIn, studentsCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', studentsCtrl.delFact);

module.exports = router;
