


const knex = require('knex')({
    client:'mssql',
    connection:{
        host : 'mobilserver.ddns.net',
        port : 1433,
        user : 'sa',
        password : 'D3v3l0p3r',
        database : 'capacitacion'
    },
    pool: { min: 2, max: 20 }
});

module.exports = knex;