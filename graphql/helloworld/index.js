const queries = require('./queries');

module.exports = {
    resolvers: {
        ...queries.resolvers
    },
    schemas: [
        queries.schemas,
    ].reduce((acc, types) => { return acc + types })
}
