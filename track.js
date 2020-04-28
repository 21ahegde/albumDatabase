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

prompt('Album id: ')
.then(function albumid(val) {
  res.push(val);
  return prompt('Song id: ');
})
.then(function songid(val) {
  res.push(val);
  console.log(res);
  prompt.done();
let query = 'INSERT INTO track VALUES (default, $1, $2)';
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