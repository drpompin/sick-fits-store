// let's go!
// This page is meant to start up our node server

// Firstly, we have to make sure that the variables in variables.env are available to our 
// application since this is the entry point of the application

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Here, we import the variables.env file
require('dotenv').config({ path: 'variables.env' });

// We import create server
const createServer = require('./createServer');

// We import the db
const db = require('./db');

const server = createServer();

// TODO: Use express middleware to handle cookies (JWT: JSON Web Token)
server.express.use(cookieParser());

// decode the JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        // put the userId onto the req for future requests to access
        req.userId = userId;
    }
    next();
});

server.express.use(async (req, res, next) => {
    // if they aren't logged in, skip this
    if (!req.userId) return next();
    const user = await db.query.user(
        { where: { id: req.userId } },
        '{ id, permissions, email, name }'
    );
    req.user = user;
    next();
});


// start it!
server.start(
    {
    // This allows for our server to b hit from only approved URLs
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    }, 
    deets => {
    console.log(`server now running on port http:/localhost:${deets.port}`)
});



