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

###4. Install your dependencies (in this case Express, Body-Parser & Express-Session)
```
npm install express body-parser express-session --save
```
