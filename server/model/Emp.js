const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const emploSchema  = new Schema({
    name:{
        type : String
    },
    designation:{
        type : String
    },
    email:{
        type : String
    },
    age:{
        type : Number
    }

},{timestamp : true});

const Emp = mongoose.model('Emp',emploSchema)
module.exports = Emp
