const { post, patch, remove } = require('../../../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const banks = {
    createBank: async (_, data) => {
        return post(`${baseUrl}/banks`, data);
    },
    updateBank: async (_, data) => {
        return patch(`${baseUrl}/banks/${data.id}`, data);
    },
    deleteBank: async (_, data) => {
        return remove(`${baseUrl}/banks/${data.id}`, data);
    }
};

const users = {
    createUser: async (_, data) => {
        return post(`${baseUrl}/users`, data);
    },
    updateUser: async (_, data) => {
        return patch(`${baseUrl}/users/${data.id}`, data);
    },
    deleteUser: async (_, data) => {
        return remove(`${baseUrl}/users/${data.id}`, data);
    }
};

const transactions = {
    createTransaction: async (_, data) => {
        return post(`${baseUrl}/transactions`, data);
    },
    updateTransaction: async (_, data) => {
        return patch(`${baseUrl}/transactions/${data.id}`, data);
    }
}

const Mutation = {
    ...banks,
    ...users,
    ...transactions
};

module.exports = { Mutation };
