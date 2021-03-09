const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const initializeGRPCClient = (server, protoConfig) => {
    const { path, packageName, serviceName } = protoConfig;
    const { host, port } = server;
    const target = `${host}:${port}`;

    const packageDefinition = protoLoader.loadSync(
        path,
        {keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });

    const pkg = grpc.loadPackageDefinition(packageDefinition);
    const proto = pkg[`${packageName}`];
    const Client = proto[`${serviceName}`];

    const client = new Client(target,
        grpc.credentials.createInsecure());

    return client;
}

module.exports = initializeGRPCClient;
