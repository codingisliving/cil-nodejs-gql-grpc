const { createGetUrl, createGetListUrl, createRPC } = require('../../baseResolver');

const Query = {
    helloworld: () => 'helloworld',
    // EXPRESS
    // banks: createGetListUrl(`banks`),
    // bank: createGetUrl(`banks`),
    // users: createGetListUrl(`users`),
    // user: createGetUrl(`users`),
    // transactions: createGetListUrl(`transactions`),
    // transaction: createGetUrl(`transactions`),

    // gRPC
    banks: createRPC('banks', 'getAllBanks', 'listBank'),
    bank: createRPC('banks', 'getBank'),
    users: createRPC('users', 'getAllUsers', 'listUser'),
    user: createRPC('users', 'getUser'),
    transactions: createRPC('transactions', 'getAllTransactions', 'listTransaction'),
    transaction: createRPC('transactions', 'getTransaction')
};


module.exports = { Query };
