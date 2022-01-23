'use strict';
var sql = require('../utils/db.js');


/**
 * Update actor
 *
 * body actor 
 * id Long 
 * no response value expected for this operation
 **/
exports.actormovie = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query('UPDATE actor set actor.name = ? WHERE id = ?', [body.name, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(id);
      }
    });
  });
}


/**
 * Create actor
 *
 * body actor  (optional)
 * returns actor
 **/
exports.createactor = function(body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO actor (name) Values(?)", [body.name], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete actor
 *
 * id Long 
 * no response value expected for this operation
 **/
/*exports.deleteactor = function(id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM actor WHERE id = ?', [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else {
        console.log(res);
        resolve({deleted: id});
      }
    });
  });
}*/


/**
 * Retrieve actor
 *
 * id Long 
 * returns actor
 **/
exports.retrieveactor = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From actor WHERE actor.id = ?", [id],  function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
  });
  });
}


/**
 * Retrieve actors
 *
 * returns List
 **/
exports.retrieveactors = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From actor", function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
  });
  });
}

