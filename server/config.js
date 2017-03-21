const githubIds = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL:'http://localhost:8080/api/auth/github/callback',
    databaseURL: process.env.DATABASE_URL
}

module.exports = githubIds;
