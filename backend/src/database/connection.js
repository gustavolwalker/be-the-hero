const knex = require('knex');
const configuration = require('../../knexfile');

let config;
switch (process.env.NODE_ENV) {
    case "test":
        config = configuration.test;
        break;
        case "dev":
        config = configuration.development;
        break;
    default:
        config = configuration.production;        
        break;
}

const connection = knex(config);

module.exports = connection;