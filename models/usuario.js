//const {Schema,model} = require('mongoose')
const mongoose = require('mongoose');
 
const UsuarioSchema = new mongoose.Schema({
//const UsuarioSchema = Schema ({
    nombre:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        require: true,
    },
    img:{
        type: String,
    },
    role:{
        type: String,
        require: true,
        default:'USER_ROLE'
    },
    google:{
        type: Boolean,
        default: false
    }
 
});


UsuarioSchema.method( 'toJSON', function( ){
    const {_v, _id, password, ...Object} = this.toObject();
    Object.uid = _id;
    return Object;
})

module.exports = mongoose.model('Usuario', UsuarioSchema);