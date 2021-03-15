const { post, patch, remove, get } = require('../connectors/httpConnector');
const baseUrl = 'http://localhost:4001';

const createPostUrl = (url) => {
    return async (_, data, context) => {
        const { headers: { auth } } = context;
        return post(`${baseUrl}/${url}`, data, { headers: { auth } });
    }
};

const createPatchUrl = (url) => {
    return async (_, data, context) => {
        const { headers: { auth } } = context;
        return patch(`${baseUrl}/${url}/${data.id}`, data, { headers: { auth } });
    }
};

const createDeleteUrl = (url) => {
    return async (_, data, context) => {
        const { headers: { auth } } = context;
        return remove(`${baseUrl}/${url}/${data.id}`, { headers: { auth } });
    }
};

const createGetListUrl = (url, emptyValue = []) => {
    return async (_, params, context) => {
        const { auth = '' } = context.headers;
        return await get(`${baseUrl}/${url}`, { headers: { auth } }) || emptyValue;
    }
};

const createGetUrl = (url, emptyValue = {}) => {
    return async (_, params, context) => {
        const { auth } = context.headers;
        return await get(`${baseUrl}/${url}/${params.id}`, { headers: { auth } }) || emptyValue;
    }
};

const createRPC = (serviceName, rpcName, targetPropName = '') => {
  return async (_, data, context) => {
    const { grpc: { client } } = context;
    const rpcClient = client[`${serviceName}`];

    return new Promise((resolve) => {
      rpcClient[`${rpcName}`](data, (err, response) => {
        if (targetPropName) {
          resolve(err || response[`${targetPropName}`]);
        }
        else {
          resolve(err || response);
        }
      });
    });
  }
};

module.exports = {
    baseUrl,
    post,
    createPostUrl,
    createPatchUrl,
    createDeleteUrl,
    createGetListUrl,
    createGetUrl,
    createRPC
}
