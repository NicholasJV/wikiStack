var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var swig = require("swig");
// module.exports = app // this line is only used to make testing easier
var bodyParser = require('body-parser')

// REMEMBER TO PLUGIN YOUR ROUTERS HERE!

//SWIG - set up render engine process
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});


app.use(function(req, res, next){
	console.log(req);
	next();
})

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/wiki', require('./routes/wiki.js'));







app.listen(3000);
//process.env.PORT || 