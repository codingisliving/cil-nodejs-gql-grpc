const { get } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const User = {
    bank: async (user) => await get(`${baseUrl}/banks/${user.bankId}`) || {}
};

module.exports = { User };
