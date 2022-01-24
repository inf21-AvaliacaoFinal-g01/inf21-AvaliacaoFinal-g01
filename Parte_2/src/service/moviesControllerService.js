'use strict';
var sql = require('../utils/db.js');


/**
 * Create movie
 *
 * body movie  (optional)
 * returns movie
 **/


exports.createmovie = function(body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO movies (language, original_title, release_date, runtime, actor_id, director_id) Values(?,?,?,?,?,?)", [body.language, body.original_title, body.release_date, body.runtime, body.actor_id, body.director_id], function (err, res) {
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
 * Delete movie
 *
 * id Long 
 * no response value expected for this operation
 **/
 exports.deletemovie = function(id) {
  return new Promise(function (resolve, reject) {
    //var cmdsql = "SET @meuid = ?; delete FROM movie_genre WHERE movie_id =  @meuid; delete from movies WHERE id =  @meuid;";
    //var cmdsql = "delete from movie_genre where movie_id = ?"
    sql.query("CALL sp_delete_movie(?);", [id], function (err, res) {
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
}


/**
 * Retrieve movie
 *
 * id Long 
 * returns movie
 **/
exports.retrievemovie = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select movies.id, movies.original_title, movies.release_date, movies.runtime, movies.actor_id, movies.director_id , (Select actor.name from actor WHERE actor.id = movies.actor_id) principal_actor, (Select director.name from director WHERE director.id = movies.director_id) principal_director, GROUP_CONCAT(genre.genre) genres from movies join movie_genre on movies.id = movie_genre.movie_id join genre on movie_genre.genre_id = genre.id WHERE movies.id = ? Group by movies.id, movies.original_title, movies.release_date, movies.runtime, movies.actor_id, movies.director_id, (Select actor.name from actor WHERE actor.id = movies.actor_id), (Select director.name from director WHERE director.id = movies.director_id)"
    , [id],  function(err, res){
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






/*Genros de um filme*/
/*exports.retrievemovie = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Select * from genre where genre.id in (select genre_id from movie_genre where movie_id = ?)", [id],  function(err, res){
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
}*/



/**
 * Retrieve movies
 *
 * returns List
 **/
exports.retrievemovies = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select movies.id, movies.original_title, movies.release_date, movies.runtime, movies.actor_id, movies.director_id , (Select actor.name from actor WHERE actor.id = movies.actor_id) principal_actor, (Select director.name from director WHERE director.id = movies.director_id) principal_director, GROUP_CONCAT(genre.genre) genres from movies join movie_genre on movies.id = movie_genre.movie_id join genre on movie_genre.genre_id = genre.id Group by movies.id, movies.original_title, movies.release_date, movies.runtime, movies.actor_id, movies.director_id, (Select actor.name from actor WHERE actor.id = movies.actor_id), (Select director.name from director WHERE director.id = movies.director_id)"
, function(err, res){
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
 * Update movie
 *
 * body movie 
 * id Long 
 * no response value expected for this operation
 **/
exports.updatemovie = function(body,id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query('UPDATE movies set original_title = ?, runtime = ?, release_date = ? WHERE id = ?', [body.original_title, body.runtime, body.release_date, id], function (err, res) {
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

