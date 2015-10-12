var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('views/index.html');
});

router.get('/projectx/', function(req, res, next) {
  res.sendfile('views/projectx.html');
});

router.get('/whoisme/', function(req, res, next) {
  res.sendfile('views/whoisme.html');
});

router.get('/html/', function (req, res) {
  res.sendfile('views/html_test.html');
});

router.get('/study/html/', function(req, res) {
  res.sendfile('views/html.html');
});

module.exports = router;
