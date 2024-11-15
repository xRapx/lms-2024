const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	userName : String,
	userEmail :String,
	password:String,
	role:String
});

module.export = mongoose.model('User' , UserSchema)