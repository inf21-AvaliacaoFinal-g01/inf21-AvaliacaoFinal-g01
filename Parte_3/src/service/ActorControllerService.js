'use strict';


/**
 * Update actor
 *
 * body Actor 
 * id Long 
 * no response value expected for this operation
 **/
exports.actormovie = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create actor
 *
 * body Actor  (optional)
 * returns actor
 **/
exports.createactor = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve actor
 *
 * id Long 
 * returns actor
 **/
exports.retrieveactor = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve actors
 *
 * returns List
 **/
exports.retrieveactors = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name"
}, {
  "name" : "name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

