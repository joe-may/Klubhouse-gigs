var express = require('express');
var router = express.Router();
const ListingsCtrl = require('../controllers/listings')

router.get('/', ListingsCtrl.index)
router.get('/new', ListingsCtrl.new)
router.get('/:id', ListingsCtrl.show)
router.post('/', ListingsCtrl.create)

module.exports = router;
//router.get('/new', () => {res.send('this is the create a listing page!')})


module.exports = router;