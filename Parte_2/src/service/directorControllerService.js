'use strict';
var sql = require('../utils/db.js');


/**
 * Create director
 *
 * body director  (optional)
 * returns director
 **/
exports.createdirector = function(body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO director (name) Values(?)", [body.name], function (err, res) {
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
 * Delete director
 *
 * id Long 
 * no response value expected for this operation
 **/


/**
 * Update director
 *
 * body director 
 * id Long 
 * no response value expected for this operation
 **/
exports.directormovie = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query('UPDATE director set director.name = ? WHERE id = ?', [body.name, id], function (err, res) {
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
 * Retrieve director
 *
 * id Long 
 * returns director
 **/
exports.retrievedirector = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From director WHERE director.id = ?", [id],  function(err, res){
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
 * Retrieve director
 *
 * returns List
 **/
exports.retrievedirectors = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From director", function(err, res){
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

