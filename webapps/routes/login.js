var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;

router.post('/', function(req, res, next) {
    res.render('intro', { title: 'Express' });
  });
  
  module.exports = router;
  