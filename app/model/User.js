const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    profileId:String,
    fullName:String,
    profilePic:String
});

const User = mongoose.model('User',UserSchema);
module.exports = User;