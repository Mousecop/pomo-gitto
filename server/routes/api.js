const express = require('express');
const router = express.Router();

const passportGithub = require('../auth/github');
const {User} = require('../models');


router.get('/api/auth/github', passportGithub.authenticate('github', {scope: ['repo', 'user']}));

router.get('/api/auth/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.cookie('token', req.user.token, {expires: 0});
    res.redirect('/#/issues');

  });

  router.get('/api/auth/logout', (req, res) => {
      req.logout()
      res.sendStatus(200)

  })

  router.post('/api/add', (req, res) =>{
      User
          .create({
              githubId: req.body.githubId,

          })
          .then(response => {
              res.json(response)
          })
          .catch(err => console.error(err));

  })

  module.exports = router;
