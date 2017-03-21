const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')


const userSchema = mongoose.Schema ({
    githubId: Number,
    token: String
})

userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = {User}
