const { get } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const Query = {
    helloworld: () => 'helloworld',
    banks: async () => await get(`${baseUrl}/banks`) || [],
    bank: async (_, params) => await get(`${baseUrl}/banks/${params.id}`) || {},
    users: async () => await get(`${baseUrl}/users`) || [],
    user: async (_, params) => await get(`${baseUrl}/users/${params.id}`) || {},
    transactions: async () => await get(`${baseUrl}/transactions`) || [],
    transaction: async (_, params) => await get(`${baseUrl}/transactions/${params.id}`) || {},
};


module.exports = { Query };
