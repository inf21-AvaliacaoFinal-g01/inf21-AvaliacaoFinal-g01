'use strict';

var utils = require('../utils/writer.js');
var directorController = require('../service/directorControllerService');

module.exports.createdirector = function createdirector (req, res, next, body) {
  directorController.createdirector(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.directormovie = function directormovie (req, res, next, body, id) {
  directorController.directormovie(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievedirector = function retrievedirector (req, res, next, id) {
  directorController.retrievedirector(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievedirectors = function retrievedirectors (req, res, next) {
  directorController.retrievedirectors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
