'use strict';

var db = require('./postgresql');
var Promise = require('bluebird');

exports.add = function(pastie) {
    return Promise.using(db.connect(), function(client) {
        return client.queryAsync({
            name: 'add_pastie',
            text: 'INSERT INTO pastie (uuid, content) VALUES (uuid_generate_v4(), $1) RETURNING uuid',
            values: [pastie.content]
        });
    }).get('rows').get(0);
};

exports.getOne = function(uuid) {
    return Promise.using(db.connect(), function(client) {
        return client.queryAsync({
            name: 'get_pastie',
            text: 'SELECT content FROM pastie WHERE uuid = $1',
            values: [uuid]
        });
    }).get('rows').get(0);
};
