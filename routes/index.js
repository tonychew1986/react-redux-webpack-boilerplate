var express = require('express');
var request = require('request');
var axios = require ('axios');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('application', { title: 'Express' });
});

router.post('/addresses', (req, res) => {
  res.send({
    "addresses": "paymentAddresses"
  });
});


module.exports = router;
