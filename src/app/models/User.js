const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const { schema } = require('./New');
// Create User schema
const userSchema = new Schema({
    idUser: String,  
    fullName: { type: String,  required: true },
    phone: { type: String,  required: true },
    email: { type: String,  required: true },
    account: { type: String,  required: true, unique: 'true'},
    createdUser: { type: Date, default: Date.now },
    updatedUser: { type: Date, default: Date.now },
    password: { type: String,  required: true },
    admin: {type: Boolean, default: false},
});

schema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
};
schema.method.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('Users', userSchema);
