const Sequelize = require('sequelize');
const sequelize = new Sequelize ({ 
    database: 'albumexercise',
    host: 'localhost',
    dialect: 'postgres'
}); 

var prompt = require('prompt-promise'); 
var res = {};


const Model = Sequelize.Model;
class track extends Model {}
track.init({
    // attributes
    album_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    song_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'track',
    tableName: 'track', 
    timestamps: false 
    // options
}); 

prompt('Album id: ')
.then(function albumid(val) {
  res.album_id = val;
  return prompt('Song id: ');
})
.then(function songid(val) {
  res.song_id = val;
  console.log(res);
  prompt.done();
}).then(() => {
    
    track.create(res).then(function(){
    console.log('Track listed!'); 
    })
    
})