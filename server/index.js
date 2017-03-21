require('dotenv').config();
const path = require('path');
const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');

const {User} = require('./models');
const mongoose = require('mongoose');

const app = express();
mongoose.Promise = global.Promise;

const {GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, DATABASE_URL} = require('./config');

// API endpoints go here!
app.use(bodyParser.json())
app.use(passport.initialize());

passport.use(new GitHubStrategy({
    clientID: 'c7b2c8e37d76f08dcb09',
    clientSecret: 'df731f1c8dbcdcd5b3f4fc4cb31678f7d2db4a4e',
    callbackURL: 'http://localhost:8080/api/auth/github/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({githubId: profile.id}, function (err, user){
            return cb(err, user);
        });
    }
));

app.get('/api/auth/github', passport.authenticate('github'));

app.get('/api/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://user:me@ds137760.mlab.com:37760/pomo-gitto", err => {

            if (err) {

                return(err);
            }
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        })

    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
