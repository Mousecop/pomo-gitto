
const githubIds = {
    clientID: 'c7b2c8e37d76f08dcb09',
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL:'https://pomo-gitto.herokuapp.com/api/auth/github/callback',
    databaseURL: process.env.DATABASE_URL
}

module.exports = githubIds;
