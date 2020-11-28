const axios = require('axios');
const baseUrl = 'http://localhost:4001';

const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const Query = {
    helloworld: () => 'helloworld',
    banks: async () => await get(`${baseUrl}/banks`) || [],
    bank: async (_, params) => await get(`${baseUrl}/banks/${params.id}`) || {}
};


module.exports = { Query };
