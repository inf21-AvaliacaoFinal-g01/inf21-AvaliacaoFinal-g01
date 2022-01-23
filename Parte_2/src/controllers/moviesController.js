'use strict';

var utils = require('../utils/writer.js');
var moviesController = require('../service/moviesControllerService');

module.exports.createmovie = function createmovie (req, res, next, body) {
  moviesController.createmovie(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletemovie = function deletemovie (req, res, next, id) {
  moviesController.deletemovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievemovie = function retrievemovie (req, res, next, id) {
  moviesController.retrievemovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievemovies = function retrievemovies (req, res, next) {
  moviesController.retrievemovies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatemovie = function updatemovie (req, res, next, body, id) {
  moviesController.updatemovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
