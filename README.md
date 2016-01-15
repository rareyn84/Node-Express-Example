Node and Express Example
========================

##(Terminal)

###1. Setup your git repo (unless it is already a clone)
```
git init
```

###2. Create your .gitignore file with the node_module exeption (Or if you prefer, create the file manually and enter the text into it)
```
echo "node_modules/" > .gitignore
```

###3. Create your main file (sometimes called server.js)
```
touch index.js
```

###4. Install your npm (also creates the package.json file)
```
npm init
```

###5. Install your dependencies (in this case Express, Body-Parser, Cors & Express-Session)
```
npm install express body-parser express-session cors --save
```

###6. Start Atom (or preferred code editor) with your project and inspect it to ensure proper setup
```
atom .
```

##(index.js)

###7. Require your dependencies
```
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
```

###8. Initialize your express app
```
var app = express();
```

###9. Use body-parser's json method to parse http body as json and assign result to req.body. The app.use() method just applies a function to every request made (before passing it on to the next function or eventually sending a response)
```
app.use(bodyParser.json());
```

###10. To avoid security issues, configure CORS to whitelist only a specific origin (replace the port number with your selected port number)
```
//Options for whitelisting cors
var corsOptions = {
   origin: 'http://localhost:' + port
};

//If you use cors options variable
app.use(cors(corsOptions));

//If you dont use cors options variable
```

##(Terminal)

###11.

###12.

###13.

###14.

###15.

###16.

###17.

###18.

###19.

###20.

###21.

###22.

###23.
