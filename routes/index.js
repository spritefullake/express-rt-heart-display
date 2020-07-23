var express = require('express');
var router = express.Router();

let values = [];
/* GET home page. */
router.get('/yo', function (req, res, next) {
  res.render('magic', { value: values.length });
});

/* POST home page. */
router.post('/', function (req, res, next) {
  values.push(req.body.value);
  console.log("The values are ",values);
  res.render('magic',{value: req.body.value});
});
module.exports = router;
