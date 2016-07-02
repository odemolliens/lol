var request = require('request'); var fs = require('fs');
request('http://www.bitcoinupdate.nl/home/genesis-mining-data-center-ijsland', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 

    fs.writeFile('message.txt', body, function() {
  console.log('It\'s saved!');
});
  }
})