const { createGetUrl } = require('../../baseResolver');

const Transaction = {
    sender: async (transaction, _, context) => {
        const getUser = createGetUrl('users');
        return getUser(_, { id: transaction.senderId }, context);
    },
    recipient: async (transaction, _, context) => {
        const getUser = createGetUrl('users');
        return getUser(_, { id: transaction.recipientId }, context);
    }
};

module.exports = { Transaction };
