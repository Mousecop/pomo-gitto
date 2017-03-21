const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')


const userSchema = mongoose.Schema ({
    username: {type: String, required: true},
    githubId: Number
})

userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = {User}
