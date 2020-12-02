const { get } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const Query = {
    helloworld: () => 'helloworld',
    banks: async () => await get(`${baseUrl}/banks`) || [],
    bank: async (_, params) => await get(`${baseUrl}/banks/${params.id}`) || {}
};


module.exports = { Query };
