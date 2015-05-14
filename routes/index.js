var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('views/projectx.html');
});

router.get('/projectx/', function(req, res, next) {
  res.sendfile('views/indexs.html');
});

router.get('/whoisme/', function(req, res, next) {
  res.sendfile('views/whoisme.html');
});

module.exports = router;
