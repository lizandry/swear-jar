require('dotenv').config()
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const Database = require('../db')
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new Database(dbName);

router.get('/', function (req, res) {
    res.send('Hello World!');
    });

  router.get('/api/users', (_unused, res, next) =>
  db
      .getAllUsers()
      .then((users) => res.send(users))
      .catch(next)
  );
  // REFACTOR probably don't need this
//   router.get('/api/teams', (_unused, res, next) =>
//   db
//       .getAllTeams()
//       .then((teams) => res.send(teams))
//       .catch(next)
//   );


  // TODO set up user login  here
// app.get('/api/login', (_unused, res, next) =>
// db.getAllUsers()
// );


// FINISHED
router.get('/api/users/:user', (req, res, next) =>
    Promise.all([
        db
            .getUser(req.params.user),
        db
            .getUserTeams(req.params.user)
    ])
    .then(data=>res.send(data))
    .catch(next)
)

// REFACTOR idk this could probably use fixing
router.get('/api/teams/:team', (req, res, next) =>
    db
        .getTeam(req.params.team)
        .then(team=>res.send(team))
        // .then(console.log('req.params', req.params))
        .catch(next)
);

// maybe can combine with /api/users/:user code
router.get('/api/teams', (req, res, next) =>
    db
        .getTeams(req.query.ids)
        .then(team=>res.send(team))
        // .then(console.log('req.params', req.query))
        .catch(next)
);

// app.post('/users', (req, res) => {
   
//     res.status(200).send(website.addUser(req.body));
// });
router.post('/api/teams/', (req, res, next) =>
    db
        // .addATeam(req.body)
        // .then(team=>res.send(team))
        // // .then(console.log('req.params', req.params))
        // .catch(next)
);

// router.use("/admins", require("./admins.route"));
// router.use("/users", require("./users.route"));
// router.use("/auth", require("./auth.route"));

module.exports = router;
