var Promise = require('bluebird');
var pg = require('pg');
var user = process.ENV.
var connString = process.ENV.DATABASE_URL;

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
