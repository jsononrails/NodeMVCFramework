
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'), 
	path = require('path'),
	config = require('./config')(),
	app = express(),
	exphbs = require('express3-handlebars'),
  compressor = require('node-minify'),
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
if ('development' == app.get('env')) {
  	app.use(express.errorHandler());
}

app.all('/admin*', function(req, res, next) {
	Admin.run(req, res, next);
});

app.all('/', function (req, res, next) {
    Home.run(req, res, next);
});

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