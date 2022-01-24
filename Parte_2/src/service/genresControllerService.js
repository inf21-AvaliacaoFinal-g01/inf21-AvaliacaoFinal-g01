'use strict';
var sql = require('../utils/db.js');


/**
 * Create genre
 *
 * body genre  (optional)
 * returns genre
 **/
exports.creategenre = function(body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO genre (genre) Values(?)", [body.genre], function (err, res) {
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
 * Delete genre
 *
 * id Long 
 * no response value expected for this operation
 **/


/*
exports.deletegenre = function(id) {
  return new Promise(function (resolve, reject) {
    var sql = "";
    sql.query("delete * FROM genre WHERE genre_id = ?;", [id], function (err, res) {
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
 * Retrieve genre
 *
 * id Long 
 * returns genre
 **/
exports.retrievegenre = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From genre WHERE genre.id = ?", [id],  function(err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
  });
  });
}


/**
 * Retrieve genres
 *
 * returns List
 **/
exports.retrievegenres = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select * From genre",  function(err, res){
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
 * Update genre
 *
 * body genre 
 * id Long 
 * no response value expected for this operation
 **/
exports.updategenre = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query('UPDATE genre set genre = ? WHERE id = ?', [body.genre, id], function (err, res) {
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




//--------------------------------------------ADICIONADO---------------------------------------------------------------------------//

/**
 * Retrieve filmes genre
 *
 * id Long 
 * returns genre
 **/

exports.retrievegenresfilms = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select genre.genre, genre.id , GROUP_CONCAT(movies.original_title) original_title from movies.genre join movie_genre on genre.id = movie_genre.genre_id  join movies on movie_genre.movie_id = movies.id WHERE genre.id = ? Group by genre.genre, genre.id;"
    , [id],  function(err, res){
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
