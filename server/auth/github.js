require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const {User} = require('../models');
const githubIds = require('../config');

const init = require('./init');

passport.use(new GitHubStrategy({
    clientID: 'c7b2c8e37d76f08dcb09',
    clientSecret: 'df731f1c8dbcdcd5b3f4fc4cb31678f7d2db4a4e',
    callbackURL: githubIds.callbackURL
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({githubId: profile.id, token: accessToken}, function (err, user){
            return cb(err, user);
        });
    }
));

init();

module.exports = passport;
