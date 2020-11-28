const { gql } = require('apollo-server-express');
const root = require('./_root');
const helloworld = require('./helloworld');
const banks = require('./banks');

const typeDefs = gql`${[
    root.schemas,
    helloworld.schemas,
    banks.schemas
].reduce((acc, schemas) => { return acc + schemas })}`;

const resolvers = {
    ...root.resolvers,
    ...helloworld.resolvers,
    ...banks.resolvers
};

module.exports = {
    typeDefs,
    resolvers
};
