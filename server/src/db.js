const pgPromise = require('pg-promise');
const pgp = pgPromise({});

class Database {
    constructor() {
        this.db = pgp('postgres://postgres@localhost:5432/swear-jar');
    }
        
    getAllUsers(){
        return this.db.any(
            `SELECT * FROM users`
            );
    }
    getAllTeams(){
        return this.db.any(
            `SELECT * FROM teams`
            );
    }


    // REFACTOR sequelize or move some of these sql strings into entities
// TODO if the user is on multiple teams, the commented-out code creates dupes
    getUser(params) {
        return this.db.one(
           
            // `SELECT 
            //     u.id,
            //     u.username,
            //     u.email,
            //     u.identify_as,
            //     ut.temp_total_swears,
            //     ut.team_id,
            //     ut.per_swear
            //     FROM users u
            //     JOIN users_to_teams ut
            //     ON u.id = ut.user_id
            //     JOIN teams t
            //     ON ut.team_id = t.id
            //     WHERE u.id = $1
            // `, params
            `SELECT
            u.id,
            u.username,
            u.email,
            u.identify_as
            FROM users u 
            WHERE u.id = $1`, 
            params
            // `SELECT * FROM users u 
        );
    }
    
    // COMPLETE!!
    getUserTeams(params) {
        return this.db.any(
            `SELECT 
            ut.temp_total_swears,
                ut.team_id,
                ut.per_swear,
                t.id,
                t.swear,
                t.team_name,
                t.pledge_url,
                t.end_date,
                t.owner
                FROM users u
                JOIN users_to_teams ut
                ON u.id = ut.user_id
                JOIN teams t
                ON ut.team_id = t.id
                WHERE u.id = $1
            `, params
            );
    }

    getTeams(params) {
        // console.log('getTeams', params)
        return this.db.any(
            `SELECT 
                t.id AS team_id,
                u.id AS user_id,
                u.username,
                u.email,
                u.identify_as,
                ut.temp_total_swears,
                ut.per_swear
                from users u
                JOIN users_to_teams ut
                ON u.id = ut.user_id
                JOIN teams t
                ON ut.team_id = t.id
                WHERE ut.team_id IN ($1)
            `, [...params]
        );
    }
    
        // REFACTOR user_id in swears table probably isn't necessary
    // COMPLETE!!
    getTeam(params) {
        return this.db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as,
                ut.temp_total_swears,
                ut.team_id,
                ut.per_swear
                from users u
                JOIN users_to_teams ut
                ON u.id = ut.user_id
                JOIN teams t
                ON ut.team_id = t.id
                WHERE ut.team_id = $1
            `, params
            );
        }
// COMPLETE!!
        addTeam(params) {
            console.log('addTeam db.js', params)
            return this.db.none(
                `INSERT INTO 
                teams(swear, team_name, pledge_url, end_date, owner)
                VALUES($1, $2, $3, $4, $5)
                `, [params.swear, 
                    params.team_name, 
                    params.pledge_url, 
                    params.end_date, 
                    params.owner]
                );
            }

    // COMPLETE!!
        addSwearToUser(params) {
            return this.db.none(
                `UPDATE users_to_teams ut
                SET temp_total_swears = temp_total_swears + 1
                WHERE user_id = $1
                AND team_id = $2
                `, params
                )

        }

        userCreate() {


        }
        userDelete() {
        
        }
        
        userLogin(email, password, callback) {
        
        }
        userLogout() {
        
        }
        // TODO this should be a call for a separate component
            // t.id, 
            // t.swear,
            // t.team_name,
            // t.pledge_url,
            // t.owner,
            // t.end_date,
        // JOIN swears s
        // ON u.id = s.user_id
            
            

        

}
// TODO configure bcrypt and jwt, i think?
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

  

module.exports = Database;