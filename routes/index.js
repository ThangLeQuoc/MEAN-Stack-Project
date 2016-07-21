var express = require('express');
var router = express.Router();

//Extra code
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  app.use(express.static(__dirname + "/public"))
});

module.exports = router;
