const { get } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const Transaction = {
    sender: async (transaction) => await get(`${baseUrl}/users/${transaction.senderId}`) || {},
    recipient: async (transaction) => await get(`${baseUrl}/users/${transaction.recipientId}`) || {}
};

module.exports = { Transaction };
