
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
	errorHandler	= require('errorhandler'),
	passport		= require('passport'),
	routes 			= require('./routes');

// app settings
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser('mvc-framework'));

// session settings
app.use(session({
  secret: 'gtw-secret-key'
}));

// setup passport for facebook auth
app.use(passport.initialize());
app.use(passport.session());

// flash messages
app.use(function(req, res, next) {
  res.locals.messages = req.session.messages;
  next();
});

// set public static directory
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  	app.use(errorHandler());
  
    // start server
    http.createServer(app).listen(config.port, function() {
        console.log('Server listening on port ' + config.port);
    });
}

// check auth before every action
app.use(function(req, res, next) {
	if(req.user || req.path === '/' || req.path ==='/login/facebook' || req.path === '/login/facebook_callback')
	{
		next();
	} else {
		res.redirect('/');
	}
});

// middleware to query user is authenticated
// in views etc.
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.isAuthenticated = req.user != null;
  next();
});

// setup routes 
app.use('/', routes);
app.use('/users', routes);
app.use('/login/facebook', routes);

app.all('/setup/database/createtables*', function(req, res, next) {
	Setup.createTables(req, res, next);
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