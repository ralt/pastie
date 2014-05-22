'use strict';

var db = require('./postgresql');

exports.add = function(pastie) {
    return db.connect().then(function() {
        return this.client.queryAsync({
            name: 'add_pastie',
            text: 'INSERT INTO pastie (content) VALUES ($1) RETURNING id',
            values: [pastie.content]
        });
    }).get('rows').get(0);
};

exports.getOne = function(id) {
    return db.connect().then(function() {
        return this.client.queryAsync({
            name: 'get_pastie',
            text: 'SELECT content FROM pastie WHERE id = $1',
            values: [id]
        });
    }).get('rows').get(0);
};
