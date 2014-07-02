'use strict';

var pastie = require('../entities/pastie');

exports.newGet = function(req, res) {
    res.render('add', {
        title: 'Create pastie'
    });
};

exports.newPost = function(req, res) {
    pastie.add({ content: req.body.content }).then(function(pastie) {
        res.redirect('/' + pastie.uuid);
    }).catch(function(err) {
        console.error(err);
        res.send(500);
    });
};

exports.getOne = function(req, res) {
    pastie.getOne(req.params.uuid).then(function(pastie) {
        if (!pastie) throw new Error('No pastie found at /' + req.params.uuid);

        res.render('pastie', {
            title: 'Single pastie',
            code: pastie.content
        });
    }).catch(function(err) {
        console.error(err);
        res.send(404);
    });
};
