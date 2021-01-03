const { baseUrl, createPostUrl, createPatchUrl, createDeleteUrl, post } = require('../../baseResolver');

const banks = {
    createBank: createPostUrl('banks'),
    updateBank: createPatchUrl('banks'),
    deleteBank: createDeleteUrl('banks')
};

const users = {
    createUser: createPostUrl('users'),
    updateUser: createPatchUrl('users'),
    deleteUser: createDeleteUrl('users')
};

const transactions = {
    createTransaction: createPostUrl('transactions'),
    updateTransaction: createPatchUrl('transactions')
}

const admin = {
    login: async (_, data) => {
        return post(`${baseUrl}/admin/login`, data);
    }
}

const Mutation = {
    ...banks,
    ...users,
    ...transactions,
    ...admin
};

module.exports = { Mutation };
