//// ./routes.js

var express = require('express'),
	router = express.Router();

var Home = require('./controllers/Home');

/* GET home page. */
router.get('/', function(req, res, next) {
	Home.index(req, res, next);
});


router.get('/users', function(req, res, next) {
	Home.users(req, res, next);
});



module.exports = router;
