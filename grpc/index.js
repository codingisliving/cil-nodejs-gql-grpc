const initGrpcClient = require('./initializeGRPCClient');

const server = { host: 'localhost', port: '50051' };

const users = initGrpcClient(
    server,
    { path: __dirname + '/protos/users.proto', packageName: 'users', serviceName: 'Users' }
);

const banks = initGrpcClient(
    server,
    { path: __dirname + '/protos/banks.proto', packageName: 'banks', serviceName: 'Banks' }
);

const transactions = initGrpcClient(
    server,
    { path: __dirname + '/protos/transactions.proto', packageName: 'transactions', serviceName: 'Transactions' }
);

module.exports = {
    client: {
        users,
        banks,
        transactions
    }
};
