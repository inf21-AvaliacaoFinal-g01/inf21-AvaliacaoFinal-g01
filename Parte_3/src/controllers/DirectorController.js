'use strict';

var utils = require('../utils/writer.js');
var DirectorController = require('../service/DirectorControllerService');

module.exports.createdirector = function createdirector (req, res, next, body) {
  DirectorController.createdirector(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.directormovie = function directormovie (req, res, next, body, id) {
  DirectorController.directormovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievedirector = function retrievedirector (req, res, next, id) {
  DirectorController.retrievedirector(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievedirectors = function retrievedirectors (req, res, next) {
  DirectorController.retrievedirectors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
