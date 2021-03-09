const initGrpcClient = require('./initializeGRPCClient');

const server = { host: 'localhost', port: '50051' };

const users = initGrpcClient(
    server,
    { path: __dirname + '/protos/users.proto', packageName: 'users', serviceName: 'Users' }
);

module.exports = {
    client: {
        users
    }
};
