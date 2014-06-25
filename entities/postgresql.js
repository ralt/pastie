var Promise = require('bluebird');
var pg = require('pg');
var connString = process.env.DATABASE_URL;

Promise.promisifyAll(pg);
Promise.promisifyAll(pg.Client.prototype);

exports.connect = function() {
    var close;
    return pg.connectAsync(connString).spread(function(client, done) {
        close = done;
        return client;
    }).disposer(function() {
        if (close) close();
    });
};
