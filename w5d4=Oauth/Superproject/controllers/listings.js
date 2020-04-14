const Student = require("../models/student");
const Listing = require('../models/new');

module.exports = {
  index,
  addFact,
  delFact,
  newListing,
  create,

};
function index(req, res, next) {
  console.log(req.query);
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  Student.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, students) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render("students/index", {
        students,
        user: req.user,
        name: req.query.name,
        sortKey,
      });
    });
}

function newListing(req, res) {
  newListing = new Listing();
  res.render('students/new', { title: 'ADD listing' })
}
function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const listing = new Listing(req.body)
  listing.save(function(err) {
    if (err) return res.redirect('/students/new')
    res.redirect(`/students`)
  })
}

function addFact(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/students');
    });
  }

  function delFact(req, res, next) {
    Student.findOne({'facts._id': req.params.id}, function(err, student) {
      student.facts.id(req.params.id).remove();
      student.save(function(err) {
        res.redirect('/students');
      });
    });
  }
