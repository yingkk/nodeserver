var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HappyChatRoom', user: '大凯凯'});
});

module.exports = router;
