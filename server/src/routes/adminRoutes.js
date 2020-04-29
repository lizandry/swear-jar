const router = require('./index');

// TODO figure out how routing like this works

// TODO this doesn't work, i'm having that weird thing where localhost 3000 serves up a previous server
router.get('/api/users', (_unused, res, next) =>
db
    .getAllUsers()
    .then((users) => res.send(users))
    .catch(next)
);