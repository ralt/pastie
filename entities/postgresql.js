var Promise = require('bluebird');
var pg = require('pg');
var connString = 'postgres://pastie_user:password@localhost/pastie';

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
