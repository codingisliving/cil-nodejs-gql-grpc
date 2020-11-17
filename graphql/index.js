const { gql } = require('apollo-server-express');
const root = require('./_root');
const helloworld = require('./helloworld');

const typeDefs = gql`${[
    root.schemas,
    helloworld.schemas,
].reduce((acc, schemas) => { return acc + schemas })}`;

const resolvers = {
    ...root.resolvers,
    ...helloworld.resolvers,
};

module.exports = {
    typeDefs,
    resolvers
};
