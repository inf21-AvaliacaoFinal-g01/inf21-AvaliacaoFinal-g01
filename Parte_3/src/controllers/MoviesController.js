'use strict';

var utils = require('../utils/writer.js');
var MoviesController = require('../service/MoviesControllerService');

module.exports.createmovie = function createmovie (req, res, next, body) {
  MoviesController.createmovie(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletemovie = function deletemovie (req, res, next, id) {
  MoviesController.deletemovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievemovie = function retrievemovie (req, res, next, id) {
  MoviesController.retrievemovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievemovies = function retrievemovies (req, res, next) {
  MoviesController.retrievemovies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatemovie = function updatemovie (req, res, next, body, id) {
  MoviesController.updatemovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
