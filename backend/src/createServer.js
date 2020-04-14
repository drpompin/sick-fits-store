// This is where we import the GraphQL Yoga server
const { GraphQLServer } = require('graphql-yoga');

//Resolvers answer d question, where does d data come from and what does d data do in the db?
// We have Query and Mutation resolvers; Query is for when we pull data and mutation is for 
// when we push data and put it into the db; 
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// we create the GraphQL Yoga server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            // Basically, we are passing Mutation and Query at the top to this Mutation and 
            // Query variables below respectively. ES6 allows us to pass values to variables
            // by just writing their names provided both variable and value have same names
            Mutation,
            Query,
        },
        resolverValidationOptions: {
            // Works to turn off erors or warnings
            requireResolversForResolveType: false,
        },

        context: req => ({ ...req, db }),
    });
}

module.exports = createServer;