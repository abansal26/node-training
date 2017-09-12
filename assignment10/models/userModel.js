var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	token : {type : String}
},{collection : 'user'});

module.exports = mongoose.model('user',userSchema);
