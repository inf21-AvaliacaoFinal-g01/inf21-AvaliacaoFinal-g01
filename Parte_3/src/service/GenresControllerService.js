'use strict';


/**
 * Create genre
 *
 * body Genre  (optional)
 * returns genre
 **/
exports.creategenre = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "genre" : "genre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete genre
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletegenre = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve genre
 *
 * id Long 
 * returns genre
 **/
exports.retrievegenre = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "genre" : "genre"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve genres
 *
 * returns List
 **/
exports.retrievegenres = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "genre" : "genre"
}, {
  "genre" : "genre"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve genres
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.retrievegenresfilms = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update genre
 *
 * body Genre 
 * id Long 
 * no response value expected for this operation
 **/
exports.updategenre = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

