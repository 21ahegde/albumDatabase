const Sequelize = require('sequelize');
const sequelize = new Sequelize ({ 
    database: 'albumexercise',
    host: 'localhost',
    dialect: 'postgres'
}); 

var prompt = require('prompt-promise'); 
var res = {};


const Model = Sequelize.Model;
class artist extends Model {}
artist.init({
    // attributes
    artist_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'artist',
    tableName: 'artist', 
    timestamps: false 
    // options
}); 

prompt('Artist Name: ')
.then(function artistname(val) {
  res.artist_name = val;
  console.log(res);
  prompt.done();
}).then(() => {
    
    artist.create(res).then(function(){
    console.log('Artist added!'); 
    })
    
})