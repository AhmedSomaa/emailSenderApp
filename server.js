const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/router');


// create the server
var server = express();

// add some middleware
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


// create the routes
router(server);


// set a port and a host
var PORT = process.env.PORT || 4000;

// listen at port and host 
server.listen(PORT, () => {
    console.log(`[+] Server listening on port: ${PORT}`);
})