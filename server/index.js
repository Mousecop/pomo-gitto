// *** main dependencies *** //

const path = require('path');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

// *** app instance *** //

const app = express();

mongoose.Promise = global.Promise;

// *** routes *** //

const routes = require('./routes/api');

const githubIds = require('./config');
// API endpoints go here!

// *** middleware *** //

app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// *** main routes *** //

app.use('/', routes);

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
        mongoose.connect("mongodb://aarongo:pass1234@ds137760.mlab.com:37760/pomo-gitto", err => {

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
