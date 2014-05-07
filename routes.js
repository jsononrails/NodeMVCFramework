//// ./routes.js

var 
	config				= require('./config')(),
	express 			= require('express'),
	router 				= express.Router(),
	facebookStrategy	= require('passport-facebook').Strategy,
	passport 			= require('passport');
	
	// setup auth
	passport.use(
		
		new facebookStrategy({
			clientID: config.facebookSettings.app_id,
			clientSecret: config.facebookSettings.secret_key,
			callbackURL: config.facebookSettings.callback_url 
		},
		
		function(accessToken, refreshToken, profile, done) {
			process.nextTick(function() {
				// assuming user exists
				done(null, profile);
			});
		}));
	
	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});
	
var 
	Home = require('./controllers/Home'),
	Auth = require('./controllers/Auth');

/* GET home page. */
router.get('/', function(req, res, next) {
	Home.index(req, res, next);
});


router.get('/users', function(req, res, next) {
	Home.users(req, res, next);
});

router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/login/facebook_callback', passport.authenticate('facebook', {
  successRedirect: '/login/success',
  failureRedirect: '/login/error'
}));

router.get('/login/success', function(req, res, next) {
	//Auth.success(req, res, next);
	res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
