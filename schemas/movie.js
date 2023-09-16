const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title : {type: String,required:true},
    description: {type: String,required:false},
    year:{type:Number,required:true},
    rate:{type:Number,required:true}
});

const Movie = mongoose.model('movie',movieSchema);
module.exports = Movie;