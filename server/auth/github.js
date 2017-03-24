
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const {User} = require('../models');
const githubIds = require('../config');

const init = require('./init');

passport.use(new GitHubStrategy({
    clientID: githubIds.clientID,
    clientSecret: githubIds.clientSecret,
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
