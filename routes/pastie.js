'use strict';

var pastie = require('../entities/pastie');

exports.newGet = function(req, res) {
    res.render('add', {
        title: 'Create pastie'
    });
};

exports.newPost = function(req, res) {
    pastie.add({ content: req.body.content }).then(function(pastie) {
        res.redirect('/' + pastie.id);
    });
};

exports.getOne = function(req, res) {
    pastie.getOne(req.params.id).then(function(pastie) {
        res.render('pastie', {
            title: 'Single pastie',
            code: pastie.content
        });
    });
};
