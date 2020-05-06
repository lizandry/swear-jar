export interface AppState {
    user: User;
    //userObject?: User;
    loggedIn: boolean;
    teams?: Team[]
  }


export interface Team {
    id?: number;
    swear?: string;
    team_name?: string;
    pledge_url?: string;
    end_date?: string; // TODO 
    owner?: number;
}

export interface User {
    id?: number;
    username?: string; // REFACTOR unnecessary
    email?: string;
    identify_as?: string;
    temp_total_swears?: number; // REFACTOR join swear table
}


// interface Props {
// }

