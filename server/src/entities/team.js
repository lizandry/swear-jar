const pgPromise = require('pg-promise');
const pgp = pgPromise({});
const db = pgp('postgres://postgres@localhost:5432/swear-jar');


// TODO ...this
class Team {
    constructor(id) {
        this.id = id
    }
       // REFACTOR user_id in swears table probably isn't necessary
    getTeam() {
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
            `, this.id
            );
        }
    // TODO not sure where this goes, but this will take userID as a parameter
    addSwearToUser() {

    }
}
module.exports = Team;