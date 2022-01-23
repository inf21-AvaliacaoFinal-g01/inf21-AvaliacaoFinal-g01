'use strict';

var utils = require('../utils/writer.js');
var actorController = require('../service/actorControllerService');

module.exports.actormovie = function actormovie (req, res, next, body, id) {
  actorController.actormovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createactor = function createactor (req, res, next, body) {
  actorController.createactor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteactor = function deleteactor (req, res, next, id) {
  actorController.deleteactor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveactor = function retrieveactor (req, res, next, id) {
  actorController.retrieveactor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveactors = function retrieveactors (req, res, next) {
  actorController.retrieveactors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
