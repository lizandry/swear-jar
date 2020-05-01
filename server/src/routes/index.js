require('dotenv').config()
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');
const Database = require('../db')
const dbName = process.env.DB_NAME || 'swear-jar';
const db = new Database(dbName);
// const webpage = require('../index.html')
// router.get('/', function (req, res, next) {
//   res.status(200).send('hello world');
// });

// TODO this is important for ejs file, react will need something else here?
// res.json(userdata)? auth token?

router.get('/', function (req, res) {
    res.send('Hello World!');
    });
// router.get('/', function (req, res, next) {
//     res.send('/webpage')
//     // res.render('index', { 
//     // res.status(200).send('index', { 
//     //   title: 'user',
//     //   isAuthenticated: req.isAuthenticated() 
//     // });
//   });
  
//   TODO this route works, but serves literally the words 'object Object' right now
// i think it might not even be important, because of 
//   router.get('/profile', requiresAuth(), function (req, res, next) {
//     // res.render('profile', {
//     res.status(200).send('profile', {
//       userProfile: JSON.stringify(req.openid.user, null, 2),
//       title: 'Profile page'
//     });
//   });

// router.get('/', function (req, res, next) {
//     res.status(200).json({ 
//       title: 'it\'s working!!',
//       isAuthenticated: req.isAuthenticated() 
//     });
//   });
  
  router.get('/profile', requiresAuth(), function (req, res, next) {
    res.rejsonnder('profile', {
      userProfile: JSON.stringify(req.openid.user, null, 2),
      title: 'Profile page'
    });
  });

//   router.get('/api/users', (_unused, res, next) =>
//   db
//       .getAllUsers()
//       .then((users) => res.send(users))
//       .catch(next)
//   );
//   // REFACTOR probably don't need this
//   router.get('/api/teams', (_unused, res, next) =>
//   db
//       .getAllTeams()
//       .then((teams) => res.send(teams))
//       .catch(next)
//   );

// router.use("/admins", require("./admins.route"));
// router.use("/users", require("./users.route"));
// router.use("/auth", require("./auth.route"));

module.exports = router;
