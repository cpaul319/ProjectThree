//  In this project, a website is created where user can create an account, log in, and purchase Game of Thrones souvenirs.
//
//  Written by Alex Chalyy, Igor Guba, Chris Lee Paul, David Lawrence, and Keith Hemsoth.
const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
const User = require('./models/user');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// invoke an instance of express application.
//invoked on line 41?
// var app = express();
// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

console.log("beginning of server");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
  });
  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

// Define API routes here
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/index');
  } else {
      next();
  }    
};


// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});


// route for user signup
app.route('/signup')
  .get(sessionChecker, (req, res) => {
      res.sendFile(__dirname + '/public/signup.html');
  })
  .post((req, res) => {
      User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
      })
      .then(user => {
          req.session.user = user.dataValues;
          res.redirect('/dashboard');
      })
      .catch(error => {
          res.redirect('/signup');
      });
  });


// route for user Login
app.route('/login')
  .get(sessionChecker, (req, res) => {
      res.sendFile(__dirname + '/public/login.html');
  })
  .post((req, res) => {
      var username = req.body.username,
          password = req.body.password;

      User.findOne({ where: { username: username } }).then(function (user) {
          if (!user) {
              res.redirect('/login');
          } else if (!user.validPassword(password)) {
              res.redirect('/login');
          } else {
              req.session.user = user.dataValues;
              res.redirect('/index');
          }
      });
  });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.sendFile(__dirname + '/public/index.html');
  } else {
      res.redirect('/login');
  }
});


// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
  } else {
      res.redirect('/login');
  }
});




var syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

console.log("works up till here");