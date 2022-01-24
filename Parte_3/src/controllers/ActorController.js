'use strict';

var utils = require('../utils/writer.js');
var ActorController = require('../service/ActorControllerService');

module.exports.actormovie = function actormovie (req, res, next, body, id) {
  ActorController.actormovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createactor = function createactor (req, res, next, body) {
  ActorController.createactor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveactor = function retrieveactor (req, res, next, id) {
  ActorController.retrieveactor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveactors = function retrieveactors (req, res, next) {
  ActorController.retrieveactors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
