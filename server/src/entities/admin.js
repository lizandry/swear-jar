const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');

class Admin {
    constructor() {
    }
        
    getAllUsers(){
        return db.any(
            `SELECT * FROM users`
            );
    }
    getAllTeams(){
        return db.any(
            `SELECT * FROM teams`
            );
    }


    // REFACTOR can i make some of these calls less ugly?
// TODO if the user is on multiple teams, the commented-out code creates dupes
        // NOTE this is also in user.js
    getUser(params) {

        return db.any(
            // `SELECT 
            //     u.id,
            //     u.username,
            //     u.email,
            //     u.identify_as,
            //     u.temp_total_swears,
            //     ut.team_id,
            //     ut.per_swear
            //     FROM users u
            //     JOIN users_to_teams ut
            //     ON u.id = ut.user_id
            //     JOIN teams t
            //     ON ut.team_id = t.id
            //     WHERE u.id = $1
            // `, params

            `SELECT * FROM users u 
            WHERE u.id = $1`, 
            params
        );
    }
        // NOTE this is also in user.js
    getUserTeams(params) {
        `SELECT
            ut.team_id,
            ut.per_swear
        FROM users_to_teams ut
        JOIN users u
        ON ut.user_id = u.id
        WHERE ut.user_id = $1
        `, params
    }
    
        // REFACTOR user_id in swears table probably isn't necessary
        // NOTE this is also in team.js
        // this one is basically done!!
    getTeam(params) {
        return db.any(
            `SELECT 
                u.id,
                u.username,
                u.email,
                u.identify_as,
                u.temp_total_swears,
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


  

module.exports = Admin;