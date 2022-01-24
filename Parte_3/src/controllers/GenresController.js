'use strict';

var utils = require('../utils/writer.js');
var GenresController = require('../service/GenresControllerService');

module.exports.creategenre = function creategenre (req, res, next, body) {
  GenresController.creategenre(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletegenre = function deletegenre (req, res, next, id) {
  GenresController.deletegenre(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievegenre = function retrievegenre (req, res, next, id) {
  GenresController.retrievegenre(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievegenres = function retrievegenres (req, res, next) {
  GenresController.retrievegenres()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievegenresfilms = function retrievegenresfilms (req, res, next, id) {
  GenresController.retrievegenresfilms(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updategenre = function updategenre (req, res, next, body, id) {
  GenresController.updategenre(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
