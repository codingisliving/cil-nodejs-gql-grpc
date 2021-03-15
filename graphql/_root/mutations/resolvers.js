const { baseUrl, createPostUrl, createPatchUrl, createDeleteUrl, createRPC } = require('../../baseResolver');

const banks = {
    // EXPRESS
    // createBank: createPostUrl('banks'),
    // updateBank: createPatchUrl('banks'),
    // deleteBank: createDeleteUrl('banks')

    // gRPC
    createBank: createRPC('banks', 'createBank', 'id'),
    updateBank: createRPC('banks', 'updateBank', 'message'),
    deleteBank: createRPC('banks', 'deleteBank', 'message')
};

const users = {
    // EXPRESS
    // createUser: createPostUrl('users'),
    // updateUser: createPatchUrl('users'),
    // deleteUser: createDeleteUrl('users')

    // gRPC
    createUser: createRPC('users', 'createUser', 'id'),
    updateUser: createRPC('users', 'updateUser', 'message'),
    deleteUser: createRPC('users', 'deleteUser', 'message')
};

const transactions = {
    // EXPRESS
    // createTransaction: createPostUrl('transactions'),
    // updateTransaction: createPatchUrl('transactions')

    // gRPC
    createTransaction: createRPC('transactions', 'createTransaction', 'id'),
    updateTransaction: createRPC('transactions', 'updateTransaction', 'message')
}

const Mutation = {
    ...banks,
    ...users,
    ...transactions
};

module.exports = { Mutation };
