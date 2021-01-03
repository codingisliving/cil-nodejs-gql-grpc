const axios = require('axios');

const get = async (url, headers = {}) => {
    try {
        const response = await axios.get(url, headers);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const post = async (url, data, headers = {}) => {
    try {
        const response = await axios.post(url, data, headers);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const patch = async (url, data, headers = {}) => {
    try {
        const response = await axios.patch(url, data, headers);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const remove = async (url, headers = {}) => {
    try {
        const response = await axios.delete(url, headers);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

module.exports = {
    get,
    post,
    patch,
    remove
}
