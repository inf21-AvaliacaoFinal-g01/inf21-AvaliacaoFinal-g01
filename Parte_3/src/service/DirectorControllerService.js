'use strict';


/**
 * Create director
 *
 * body Director  (optional)
 * returns director
 **/
exports.createdirector = function(body) {
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
 * Update director
 *
 * body Director 
 * id Long 
 * no response value expected for this operation
 **/
exports.directormovie = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve director
 *
 * id Long 
 * returns director
 **/
exports.retrievedirector = function(id) {
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
 * Retrieve directors
 *
 * returns List
 **/
exports.retrievedirectors = function() {
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

