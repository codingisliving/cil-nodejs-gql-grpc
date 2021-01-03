const { createGetUrl } = require('../../baseResolver');

const User = {
    bank: async (user, _, context) => {
        const getBank = createGetUrl('banks');
        return getBank(_, { id: user.bankId }, context);
    }
};

module.exports = { User };
