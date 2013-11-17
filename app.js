var express = require('express'),
	MemStore = express.session.MemoryStore,
	app = express(),
	http = require('http'),
	config = require('./config')();

var path = require('path'),
	async = require('async'),
	exphbs = require('express3-handlebars'),
	fs = require('fs');

	// some environment variables
	app.set('views', __dirname + '/views');
	app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
	app.set('view engine', 'handlebars');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('angleiron_cookie'));
	app.use(express.session({ secret: "keep calm and don't blink", cookie: { maxAge: 1800000}, store: new MemStore() }));
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.compress);	

// dynamically include routes (Controller)
/*fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }*/

	// routes
	var Admin = require('./controllers/Admin');
	app.all('/admin*', function(req, res, next) {
		Admin.run(req, res, next);
	});
	
	http.createServer(app).listen(config.port, function() {
		console.log('Express server listening on port ' + config.port);;
	});
