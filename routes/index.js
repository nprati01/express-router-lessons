var express = require('express');
var router = express.Router();

/* GET home page. */
// path - http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express To-Dos | Home' });
});

module.exports = router;
