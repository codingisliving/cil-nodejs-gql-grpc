const { createGetUrl, createRPC } = require('../../baseResolver');

const User = {
    bank: async (user, _, context) => {
        // EXPRESS
        // const getBank = createGetUrl('banks');

        // gRPC
        const getBank = createRPC('banks', 'getBank');
        return getBank(_, { id: user.bankId }, context);
    }
};

module.exports = { User };
