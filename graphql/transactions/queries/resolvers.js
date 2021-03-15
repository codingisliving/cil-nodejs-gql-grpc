const { createGetUrl, createRPC } = require('../../baseResolver');

const Transaction = {
    sender: async (transaction, _, context) => {
        // EXPRESS
        // const getUser = createGetUrl('users');

        // gRPC
        const getUser = createRPC('users', 'getUser');
        return getUser(_, { id: transaction.senderId }, context);
    },
    recipient: async (transaction, _, context) => {
        // EXPRESS
        // const getUser = createGetUrl('users');

        // gRPC
        const getUser = createRPC('users', 'getUser');
        return getUser(_, { id: transaction.recipientId }, context);
    }
};

module.exports = { Transaction };
