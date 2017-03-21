const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')


const userSchema = mongoose.Schema ({
    githubId: Number

})

userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = {User}
