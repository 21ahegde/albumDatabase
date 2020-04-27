var co = require('co');
var prompt = require('prompt-promise');
var res = [];

const config = {
    host: 'localhost',
    port: 5432,
    database: 'albumexercise',
    user: 'postgres'
};

const pgp = 
require('pg-promise')();
const db = pgp(config);