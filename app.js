
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'), 
	path = require('path'),
	config = require('./config')(),
	app = express(),
	exphbs = require('express3-handlebars'),
	Admin = require('./controllers/Admin'),
	Home = require('./controllers/Home');

// all environments
// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('mvc-framework'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
/*if ('development' == app.get('env')) {
  	app.use(express.errorHandler());
}*/
var attachDB = function(req, res, next) {
//	req.db = db;
	next();
};

app.all('/admin*', attachDB, function(req, res, next) {
	Admin.run(req, res, next);
});

app.all('/', function (req, res, next) {
    Home.run(req, res, next);
});

http.createServer(app).listen(config.port, function() {
		  	console.log(
		  		'Express server listening on port ' + config.port
		  	);
});