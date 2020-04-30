const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

// router.get('/', function (req, res, next) {
//   res.status(200).send('hello world');
// });

router.get('/', function (req, res, next) {
    // res.render('index', { 
        // TODO this is important for ejs file, react will need something else here?
        // res.json(userdata)? auth token?
    res.status(200).send('index', { 
      title: 'user',
      isAuthenticated: req.isAuthenticated() 
    });
  });
  
//   TODO figure... anything about this out
  router.get('/profile', requiresAuth(), function (req, res, next) {
    // res.render('profile', {
    res.status(200).send('profile', {
      userProfile: JSON.stringify(req.openid.user, null, 2),
      title: 'Profile page'
    });
  });


// router.use("/admins", require("./admins.route"));
// router.use("/users", require("./users.route"));
// router.use("/auth", require("./auth.route"));

module.exports = router;
