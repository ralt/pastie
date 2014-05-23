var Promise = require('bluebird');
var pg = require('pg');
var connString = process.env.DATABASE_URL;

Promise.promisifyAll(pg);
Promise.promisifyAll(pg.Client.prototype);

exports.connect = function() {
    return pg.connectAsync(connString).bind({}).spread(function(client, close) {
        this.close = close;
        this.client = client;
    }).finally(function() {
        this.close();
    });
};
