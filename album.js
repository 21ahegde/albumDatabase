/*var co = require('co'); */
var prompt = require('prompt-promise'); 
var res = [];

const config = {
    host: 'localhost',
    port: 5432,
    database: 'albumexercise',
    user: 'postgres'
};

const pgp = 
require('pg-promise')();
const db = pgp(config);

/*
db.result("INSERT INTO album VALUES (artist_id, release_year, album_name) ")
.then(function (res) {
    console.log(res);
})
.catch((e) => {"oops"}); 
pgp.end 
*/

prompt('Artist id: ')
.then(function artistid(val) {
  res.push(val);
  return prompt('Release year: ');
})
.then(function releaseyear(val) {
  res.push(val);
  return prompt('Album name: ');
})
.then(function albumname(val) {
  res.push(val);
  console.log(res);
  prompt.done();
let query = 'INSERT INTO album VALUES (default, $1, $2, $3)';
db.result(query, res)
    .then(function (result) {
        console.log(result);
    })
    .catch((e) => {console.error(e)});
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  prompt.finish();
});

/*
CREATE TABLE artist (
    id SERIAL PRIMARY KEY,
    artist_name VARCHAR
);
​
CREATE TABLE album (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES artist(id),
    release_year INTEGER,
    album_name VARCHAR
);
​
CREATE TABLE track (
    id SERIAL PRIMARY KEY,
    album_id INTEGER REFERENCES album(id),
    song_id INTEGER REFERENCES song(id)
);
​
CREATE TABLE artist_track_collab (
    id SERIAL PRIMARY KEY,
    artist_id INTEGER REFERENCES artist(id),
    track_id INTEGER REFERENCES track(id)
);
​
​
CREATE TABLE song_writer (
    id SERIAL PRIMARY KEY,
    writer_name VARCHAR
);
​
CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    song_name VARCHAR,
    duration INTEGER,
    release_year INTEGER
);
​
CREATE TABLE song_writer_link (
    id SERIAL PRIMARY KEY,
    song_id INTEGER REFERENCES song(id),
    writer_id INTEGER REFERENCES song_writer(id)
);
*/ 