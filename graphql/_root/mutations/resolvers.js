const axios = require('axios');
const baseUrl = 'http://localhost:4001';

const post = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const Mutation = {
    createBank: async (_, data) => {
        return post(`${baseUrl}/banks`, data);
    }
}

module.exports = { Mutation };
