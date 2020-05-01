require('dotenv').config()
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const Database = require('../db')
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new Database(dbName);

router.get('/', function (req, res) {
    res.send('Hello World!');
    });

//   TODO this route works, but serves literally the words 'object Object' right now
// i think it might not even be important, and is just an html vanity thing
//   router.get('/profile', requiresAuth(), function (req, res, next) {
//     // res.render('profile', {
//     res.status(200).send('profile', {
//       userProfile: JSON.stringify(req.openid.user, null, 2),
//       title: 'Profile page'
//     });
//   });

  

  router.get('/api/users', (_unused, res, next) =>
  db
      .getAllUsers()
      .then((users) => res.send(users))
      .catch(next)
  );
//   // REFACTOR probably don't need this
  router.get('/api/teams', (_unused, res, next) =>
  db
      .getAllTeams()
      .then((teams) => res.send(teams))
      .catch(next)
  );


  // TODO set up user login  here
// app.get('/api/login', (_unused, res, next) =>
// db.getAllUsers()
// );

app.get('/api/users/:user', (req, res, next) =>
    db
        .getUser(req.params.id)
        .then(user=>res.send(user))
        .catch(next)
);

// 
app.get('/api/users/:userTeams', (req, res, next) =>
    db
        .getUserTeams(req.params.id)
        .then(teams=>res.send(teams))
        .catch(next)
);

app.get('/api/teams/:team', (req, res, next) =>
    db
        .getTeam(req.params.team)
        .then(team=>res.send(team))
        // .then(console.log('req.params', req.params))
        .catch(next)
);

// router.use("/admins", require("./admins.route"));
// router.use("/users", require("./users.route"));
// router.use("/auth", require("./auth.route"));

module.exports = router;
