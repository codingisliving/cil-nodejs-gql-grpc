const axios = require('axios');

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

const patch = async (url, data) => {
    try {
        const response = await axios.patch(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    return null;
}

const remove = async (url, data) => {
    try {
        const response = await axios.delete(url, data);
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
