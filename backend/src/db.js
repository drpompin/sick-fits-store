// This file connects to the remote prisma DB and gives us the ability to query it 
// with javaScript

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    //typeDefs(Type definitions): The database needs to know all of the data types, queries 
    // and mutations; hence, it is fed the prisma.graphql file
    typeDefs: 'src/generated/prisma.graphql',

    // It also needs to gain access to the database whose url link lives in the variables.env 
    // files. the endpoint variable is used to access environmental variables in node.js
    endpoint: process.env.PRISMA_ENDPOINT,

    secret: process.env.PRISMA_SECRET,

    // can be set to true or false; true console.logs all the queries
    debug: false,
});

module.exports = db;