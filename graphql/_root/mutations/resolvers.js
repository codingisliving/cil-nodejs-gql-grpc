const { post, patch, remove } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const Mutation = {
    createBank: async (_, data) =>a {
        return post(`${baseUrl}/banks`, data);
    },
    updateBank: async (_, data) => {
        return patch(`${baseUrl}/banks/${data.id}`, data);
    },
    deleteBank: async (_, data) => {
        return remove(`${baseUrl}/banks/${data.id}`, data);
    }
}

module.exports = { Mutation };
