var {ipAddress} = require("../find-ip");
var express = require('express');
var router = express.Router();

let values = [];
router.get('/', function(req, res, next){
  res.render('index',{ipAddress})
});

module.exports = router;
