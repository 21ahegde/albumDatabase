const Sequelize = require('sequelize');
const sequelize = new Sequelize ({ 
    database: 'albumexercise',
    host: 'localhost',
    dialect: 'postgres'
}); 

var prompt = require('prompt-promise'); 
var res = {};


const Model = Sequelize.Model;
class album extends Model {}
album.init({
    // attributes
    artist_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    release_year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    album_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'album',
    tableName: 'album', 
    timestamps: false 
    // options
}); 

prompt('Artist id: ')
.then(function artistid(val) {
  res.artist_id = val;
  return prompt('Release year: ');
})
.then(function releaseyear(val) {
  res.release_year = val;
  return prompt('Album name: ');
})
.then(function albumname(val) {
  res.album_name = val;
  console.log(res);
  prompt.done();
}).then(() => {
    
    album.create(res).then(function(){
    console.log('album created!'); 
    })
    
})



