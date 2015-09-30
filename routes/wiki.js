
var express = require('express')
var router = express.Router()
var models = require('../models/');
var Page = models.Page; 
var User = models.User;

module.exports = router
// var _ = require('lodash');
var bodyParser = require('body-parser')

function generateUrl(title){
	if (typeof title !== 'undefined' &amp;&amp; title !== '') {
		return title.replace(/\s+/g, '_').replace(/\W/g, '');
  	} else {
		return Math.random().toString(36).substring(2, 7);
	}
}

router.get('/', function(req, res, next) {
	console.log("GET GOOD");
	// res.send('got to GET /wiki/');
	res.redirect('/')
});

router.post('/', function(req, res, next) {

	var page = new Page({
		title: req.body.title,
		content: req.body.content 
	});

	page.save();
	res.redirect('/')
});

router.get('/add', function(req, res, next) {
	res.render('addpage');
	// res.send('got to GET /wiki/add');
});



