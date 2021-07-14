const express = require('express');
const app = express();

// port on which this server will run
const port = 1000;

// require db from mongoose.js in config
const db = require('./config/mongoose');

// express view engine
app.set('views', './views');
app.set('view engine', 'ejs');

//for static files
app.use(express.static('./assets'));


//to parse the requests body data of post requests
app.use(express.urlencoded({extended: true}));

// Middleware for routes
app.use('/', require('./routes'));


// Ensure connection to server
app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is up and running on ',port);
});