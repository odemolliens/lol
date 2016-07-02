var request = require('request');
var querystring = require('querystring');

var form = {
  // Pass a simple key-value pair 
  market: 'nlg',
  market_type: "buy",
  price: "0.0025",
  quantity: "2",
  btc_max: "1"
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

request({
  headers: {
    'Content-Length': contentLength,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  uri: 'http://127.0.0.1:8085/api/index',
  body: formData,
  method: 'POST'
}, function (err, res, body) {
  console.log(body);
});