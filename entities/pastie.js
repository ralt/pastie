'use strict';

var db = require('./postgresql');

exports.add = function(pastie) {
    return db.connect().then(function() {
        return this.client.queryAsync({
            name: 'add_pastie',
            text: 'INSERT INTO pastie (uuid, content) VALUES (uuid_generate_v4(), $1) RETURNING uuid',
            values: [pastie.content]
        });
    }).get('rows').get(0);
};

exports.getOne = function(uuid) {
    return db.connect().then(function() {
        return this.client.queryAsync({
            name: 'get_pastie',
            text: 'SELECT content FROM pastie WHERE uuid = $1',
            values: [uuid]
        });
    }).get('rows').get(0);
};
