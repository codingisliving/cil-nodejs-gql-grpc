const { gql } = require('apollo-server-express');
const root = require('./_root');
const helloworld = require('./helloworld');
const banks = require('./banks');
const users = require('./users');
const transactions = require('./transactions');
const admin = require('./admin');

const typeDefs = gql`${[
    root.schemas,
    helloworld.schemas,
    banks.schemas,
    users.schemas,
    transactions.schemas,
    admin.schemas
].reduce((acc, schemas) => { return acc + schemas })}`;

const resolvers = {
    ...root.resolvers,
    ...helloworld.resolvers,
    ...banks.resolvers,
    ...users.resolvers,
    ...transactions.resolvers,
    ...admin.resolvers
};

module.exports = {
    typeDefs,
    resolvers
};
