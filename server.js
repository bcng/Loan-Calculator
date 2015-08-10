/////////////////////////////////////
//  DEPENDENCIES
/////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 8899;

/////////////////////////////////////
//  MIDDLEWARE
/////////////////////////////////////

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////////
//  ENDPOINTS
/////////////////////////////////////

//  Math random function 
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

app.get('/api/interest_rate', function(req, res){
	return res.send({
		rate: getRandomArbitrary(.01, .2).toFixed(2)
	});
});

app.listen(port, function() {
	console.log("Listening on port " + port);
})
