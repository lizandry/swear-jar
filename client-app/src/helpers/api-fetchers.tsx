export function fetchAllUsers() {
    return fetch('/api/users', {
      headers: {
        Accept: 'application/json'
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/users') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}.`
        );
      }
    });
  }

//   COMPLETE!!
export function fetchUser(params: number) {
    return fetch(`/api/users/${params}`, {
        headers: {
            Accept: 'application/json'
        },
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/users/${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
        );
      }
    });
  }

// COMPLETE!!
export function getTeam(params: number) {
    return fetch(`/api/teams/${params}`, {
        headers: {
            Accept: 'application/json'
        },
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/teams/${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
        );
      }
    });
  }

//   TODO this is a faster way of fetching team data
export function getTeams(params: number[]) {
    return fetch(`/api/teams?ids=${params}`, {
        headers: {
            Accept: 'application/json'
        },
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/teams?ids=${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
        );
      }
    });
  }

//   COMPLETE!!
// REFACTOR TODO this returns an updated swear count. make it re-render the table row
export function postSwear(user_id: number, team_id: number) {
    return fetch(`/api/users/${user_id}/${team_id}`, {
        method: 'POST',
        body: JSON.stringify({
            user_id,
            team_id
        }),
        headers: {
            Accept: 'application/json'
        }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/users/${user_id}/${team_id}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
        );
      }
    });
  }

// COMPLETE!!
export function postTeam(params) {
    return fetch(`/api/teams/team`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp => {
            if (resp.ok) {
                return;
      } else {
            throw new Error(
                `oops!! fetch('/api/teams/') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
            );
      }
    });
  }

  
