'use strict';

var utils = require('../utils/writer.js');
var genresController = require('../service/genresControllerService');

module.exports.creategenre = function creategenre (req, res, next, body) {
  genresController.creategenre(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletegenre = function deletegenre (req, res, next, id) {
  genresController.deletegenre(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievegenre = function retrievegenre (req, res, next, id) {
  genresController.retrievegenre(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievegenres = function retrievegenres (req, res, next) {
  genresController.retrievegenres()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updategenre = function updategenre (req, res, next, body, id) {
  genresController.updategenre(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



 //--------------------------------------------ADICIONADO---------------------------------------------------------------------------//

 
module.exports.retrievegenresfilms = function retrievegenresfilms (req, res, next, id) {
  genresController.retrievegenresfilms(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};