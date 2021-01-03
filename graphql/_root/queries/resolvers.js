const { createGetUrl, createGetListUrl } = require('../../baseResolver');

const Query = {
    helloworld: () => 'helloworld',
    banks: createGetListUrl(`banks`),
    bank: createGetUrl(`banks`),
    users: createGetListUrl(`users`),
    user: createGetUrl(`users`),
    transactions: createGetListUrl(`transactions`),
    transaction: createGetUrl(`transactions`),
};


module.exports = { Query };
