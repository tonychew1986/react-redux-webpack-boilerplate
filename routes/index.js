var express = require('express');
var request = require('request');
var axios = require ('axios');
var router = express.Router();


//let paymentAddresses = [];

var paymentAddresses = require('./data/address');

//paymentAddresses.push(address);
//console.log("paymentAddresses: "+paymentAddresses);

/* GET home page. */

router.get('/', (req, res) => {
  res.render('application', { title: 'Express' });
});

router.post('/addresses', (req, res) => {
  res.send({
    "addresses": paymentAddresses
  });
});

router.post('/price', (req, res) => {
  function getBTC() {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/');
  }
  function getLTC() {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/');
  }
  function getETH() {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/');
  }
  function getUSDtoSGD(){
    return axios.get('https://api.fixer.io/latest?base=USD&symbols=SGD');
  }
  axios.all([getBTC(), getLTC(), getETH(), getUSDtoSGD()])
  .then(axios.spread((btc, ltc, eth, usd) => {
    res.send({
      "priceBTC": ((btc.data[0].price_usd) * usd.data.rates.SGD).toFixed(2),
      "priceLTC": ((ltc.data[0].price_usd) * usd.data.rates.SGD).toFixed(2),
      "priceETH": ((eth.data[0].price_usd) * usd.data.rates.SGD).toFixed(2)
    });
  }))
});

router.post('/ltc-query', (req, res) => {
  let ltcAddress = "3L9Lq4gmnAyBK752J2psyQ4SyGHKjkCWQL";
  axios({
    method:'get',
    url:'https://api.blockcypher.com/v1/ltc/main/addrs/'+ltcAddress
  }).then((response) => {
    res.send(response.data.txrefs);
  }).catch(function (error) {
    console.log(error);
  });
});

router.post('/btc-query', (req, res) => {
  let btcAddress = "32rPLpBKdZtcM11YCBcCo23HRwVySrGc2H";
  axios({
    method:'get',
    url:'https://api.blockcypher.com/v1/btc/main/addrs/'+btcAddress
  }).then((response) => {
    res.send(response.data.txrefs);
  }).catch(function (error) {
    console.log(error);
  });
});

router.post('/eth-query', (req, res) => {
  let ethAddress = "0x94c1659e89ec73aa54484d4678a3713841b3f055";
  axios({
    method:'get',
    url:'https://api.blockcypher.com/v1/eth/main/addrs/'+ethAddress
  }).then((response) => {
    res.send(response.data.txrefs);
  }).catch(function (error) {
    console.log(error);
  });
});

module.exports = router;
