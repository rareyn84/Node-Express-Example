Node and Express Example
========================

##(Terminal)

###1. Setup your git repo
(unless it is already a clone)
```
$ git init
```

###2. Create your .gitignore file
with the node_module exeption (Or if you prefer, create the file manually and enter the text into it)
```
$ echo "node_modules/" > .gitignore
```

###3. Create your main file
(sometimes called server.js)
```
$ touch index.js
```

###4. Install your npm
(also creates the package.json file)
```
$ npm init
```

###5. Install your dependencies
(in this case Express, Body-Parser, Cors & Express-Session)
```
$ npm install express body-parser express-session cors --save
```

###6. Start Atom
(or preferred code editor) with your project and inspect it to ensure proper setup
```
$ atom .
```

##(index.js)

###7. Require your dependencies
```javascript
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
```

###8. Initialize your express app
```javascript
var app = express();
```

###9. Use body-parser's json method to parse http body as json and assign result to req.body. The app.use() method just applies a function to every request made (before passing it on to the next function or eventually sending a response)
```javascript
app.use(bodyParser.json());
```

###10. CORS is a node package necessary when creating cross-origin apps (CORS replaces the need to supply headers added to the enpoint). To avoid security issues, configure CORS to whitelist only a specific origin (replace the port number with your selected port number)
```javascript
//Options for whitelisting cors
var corsOptions = {
   origin: 'http://localhost:' + port
};

//If you use cors options variable
app.use(cors(corsOptions));

//If you dont use cors options variable
app.use(cors());
```

##(Terminal)

###11. Create a controllers directory (inside which the files that will contain functions to link our endpoints with our models or services are placed)
```
mkdir controllers
```

###12. Inside your contollers dir, create one or more controllers, each for a specific resource (i.e. users, movies, etc.). For these instructions we will use "users" as our resource example
```
cd controllers
touch users_controller.js
```

##(index.js)

###13. Pull in the code that we're going to be adding to the users_controller
```javascript
var mainCtrl = require('./controllers/users_controller');
```

###14. Tell express to listen to a port -- also tell express what port to send response on. Common ports used for local dev servers are 3000 and 8080
```javascript
var port = 3000;
app.listen(port, function(){
  console.log("Listening on port ", port);
});
```

###15. Build your endpoints. We have 5 here to get all users, get a specific user, add a user, edit a user, and delete a user. pass a reference to the methods that we will be exporting as part of our resource controller (users_controller in our example)
```javascript
app.get('/users', usersCtrl.index);
app.get('/users/:id', usersCtrl.show);
app.post('/users', usersCtrl.create);
app.put('/users', usersCtrl.update);
app.delete('/users', usersCtrl.destroy);
```

##(users_controller.js)

###16. Create an object of methods that is exported from the cotroller file. This object will contain methods called by our /users(/:id) endpoints in index.js
```javascript
module.exports = {
  index: function(req, res, next) { //A function for a GET request that returns the whole array of users
    res.send(users);
  },
  show: function(req, res, next) { //A function for a GET request that returns a specific user
    var user = users[req.params.id];
    res.send(user);
  },
  create: function(req, res, next) { //A function for a POST request that creates a new user
    users.push(req.body);
    res.json(users[users.length - 1]);
  },
  update: function(req, res, next){ //A function for a PUT request that updates a user
    var id = req.params.id;
    users[id] = req.body;
    res.json(users[id]);
  },
  destroy: function(req, res, next) { //A function for a DELETE request that removes a user
    users.splice(req.params.id, 1);
    res.status(204).send();
  }
}
```

##(Terminal)

###17. Add models folder
```
cd ..
mkdir models
```

###18. Add User.js file
```
touch User.js
```

## (User.js)

###19. Export an array of users
```javascript
module.exports = [{
  name: 'string',
  email: 'string@string.string'
},
{
  name: 'bob',
  email: 'bob@bob.bob'
},
{
  name: 'frank',
  email: 'frank@frank.frank'
}];
```

##(users_controller.js)

###20. Require (at the top of this file) the array of users in User.js
```javascript
var users = require('../models/User');
```

##(Terminal)

###21. Run your new server using node
```javascript
nodemon
```

##(Postman)

###22. Test your endpoints using Chrome's Postman extension (see Postman documentation or ask for help with this if you need it)

###At this point your backend has its basic setup and is ready to manipulate user data
