// STEP 7
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

// STEP 14
var usersCtrl = require('./controllers/users_controller');

// STEP 8
var app = express();

// STEP 9
app.use(bodyParser.json());

// STEP 10
app.use(cors());

// STEP 11
app.use(session({
  secret: 5,
  saveUninitialized: true,
  resave: true
}));
app.use(function(req, res, next) {
  console.log(req.session);
  next();
});

// STEP 16
app.get('/users', usersCtrl.index);
app.get('/users/:id', usersCtrl.show);
app.post('/users', usersCtrl.create);
app.put('/users/:id', usersCtrl.update);
app.delete('/users/:id', usersCtrl.destroy);

app.post('/cart', function(req, res, next) {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(req.body);
  res.json(req.session.cart);
});

// STEP 15
var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});
