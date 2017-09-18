var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	user = require('./models/userModel.js'),
	passport = require('passport'),
	bodyParser = require('body-parser');
var route = require('./routes/routes.js');
var BearerStrategy = require('passport-http-bearer').Strategy;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/UHG');

passport.use(new BearerStrategy(
	function(token, done) {
		console.log(token);
  	user.findOne({'token': token }, function (err, user) {
	    if (err) { return done(err); }
	    if (!user) { return done(null, false);}
	    console.log(user);
	    return done(null, user, { scope: 'all' });
    });
  }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true}));
app.use(passport.initialize());

app.use('/',passport.authenticate('bearer', { session: false }) , route());

app.listen(3000);