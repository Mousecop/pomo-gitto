
const githubIds = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL:'https://pomo-gitto.herokuapp.com/api/auth/github/callback',
    databaseURL: process.env.DATABASE_URL
}

module.exports = githubIds;
