
/**
 * Module dependencies.
 */

var express 		= require('express'),
	http 			= require('http'), 
	path 			= require('path'),
	config 			= require('./config')(),
	app 			= express(),
	exphbs 			= require('express3-handlebars'),
  	compressor 		= require('node-minify'),
  	crypto			= require('crypto'),
    favicon 		= require('static-favicon'),
	logger 			= require('morgan'),
	bodyParser 		= require('body-parser'),
    methodOverride 	= require('method-override'),
	cookieParser 	= require('cookie-parser'),
	session			= require('express-session'),
	errorHandler	= require('errorhandler');

  // link controllers
	Admin = require('./controllers/Admin'),
  	Post = require('./controllers/Post'),
	Home = require('./controllers/Home'),
  	Account = require('./controllers/Account'),
  	Setup = require('./controllers/Setup');

// all environments
// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser('mvc-framework'));

app.use(session({
  secret: 'gtw-secret-key'
}));

// flash messages
app.use(function(req, res, next) {
  res.locals.messages = req.session.messages;
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  	app.use(errorHandler());
  
    // start server
    http.createServer(app).listen(config.port, function() {
        console.log('Server listening on port ' + config.port);
    });
}

app.all('/admin*', function(req, res, next) {
	Admin.Index(req, res, next);
});

app.all('/account/signup', function(req, res, next) {
  Account.signup(req, res, next);
});

app.all('/post/insert', function(req, res, next) {
  Post.insert(req, res, next);
});

app.all('/setup/database/createtables*', function(req, res, next) {
	Setup.createTables(req, res, next);
});

app.all('/', function (req, res, next) {
    Home.index(req, res, next);
});

if ('production' == app.get('env')) {
    // compress and concat css
    console.log('Compressing CSS files');
    new compressor.minify({
        type: 'sqwish',
        fileIn: ['public/css/site.css', 'public/css/text.css'],
        fileOut: 'public/css/main-min.css',
        callback: function(err, min){
            
            if(!err) {
                console.log("CSS compression complete");
            } else {
              console.log(err);
            }
          
            // compress and concat js
            console.log("Compressing JavaScript files");
            new compressor.minify({
                type: 'gcc',
                fileIn: ['public/js/site.js',],
                fileOut: 'public/js/main-min.js',
                callback: function(err, min){
                    
                    if(!err) {
                      console.log("JavaScript compression complete");
                    } else {
                      console.log(err);
                    }
                      
                    // start server
                    http.createServer(app).listen(config.port, function() {
                      console.log(
                        'Server listening on port ' + config.port
                      );
                    });
                }
            });
        }
    });
}