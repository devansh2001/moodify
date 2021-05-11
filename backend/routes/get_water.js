var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
  console.log(req.body);
  console.log("This is working yay")
  res.send('This is working!');
});

module.exports = router;
