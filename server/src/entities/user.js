const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');


// TODO figure out... how i want all of this to work
class User {
    constructor(loggedIn, id) {
        this.loggedIn = false;
        this.id = id
    }
    getUser() {

        return db.any(
           
            `SELECT * FROM users u 
            WHERE u.id = $1`, 
            this.id
        );
    }

    getUserTeams() {
        `SELECT
            ut.team_id,
            ut.per_swear
        FROM users_to_teams ut
        JOIN users u
        ON ut.user_id = u.id
        WHERE ut.user_id = $1
        `, this.id
    }
    userCreate() {


    }
    userDelete() {
    
    }
    
    userLogin(email, password, callback) {
    
    }
    userLogout() {
    
    }
}

module.exports = User;

// function login(email, password, callback) {
//     //this example uses the "pg" library
//     //more info here: https://github.com/brianc/node-postgres
  
//     const bcrypt = require('bcrypt');
//     const postgres = require('pg');
  
//     const conString = 'postgres://user:pass@localhost/mydb';
//     postgres.connect(conString, function (err, client, done) {
//       if (err) return callback(err);
  
//       const query = 'SELECT id, nickname, email, password FROM users WHERE email = $1';
//       client.query(query, [email], function (err, result) {
//         // NOTE: always call `done()` here to close
//         // the connection to the database
//         done();
  
//         if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));
  
//         const user = result.rows[0];
  
//         bcrypt.compare(password, user.password, function (err, isValid) {
//           if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
  
//           return callback(null, {
//             user_id: user.id,
//             nickname: user.nickname,
//             email: user.email
//           });
//         });
//       });
//     });
//   }