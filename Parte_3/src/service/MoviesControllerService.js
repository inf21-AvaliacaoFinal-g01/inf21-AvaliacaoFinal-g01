'use strict';


/**
 * Create movie
 *
 * body Movie  (optional)
 * returns movie
 **/
exports.createmovie = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "original_title" : "Title",
  "release_date" : "2000-02-11",
  "runtime" : 123,
  "language" : "language",
  "actor_id" : 1,
  "director_id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete movie
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletemovie = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieve movie
 *
 * id Long 
 * returns movie
 **/
exports.retrievemovie = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "original_title" : "Title",
  "release_date" : "2000-02-11",
  "runtime" : 123,
  "language" : "language",
  "actor_id" : 1,
  "director_id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve movies
 *
 * returns List
 **/
exports.retrievemovies = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "original_title" : "Title",
  "release_date" : "2000-02-11",
  "runtime" : 123,
  "language" : "language",
  "actor_id" : 1,
  "director_id" : 1
}, {
  "original_title" : "Title",
  "release_date" : "2000-02-11",
  "runtime" : 123,
  "language" : "language",
  "actor_id" : 1,
  "director_id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update movie
 *
 * body Movie 
 * id Long 
 * no response value expected for this operation
 **/
exports.updatemovie = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

