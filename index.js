const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const graphql = require('./graphql')

const server = new ApolloServer(graphql);

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
