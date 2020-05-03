export function fetchAllUsers() {
    return fetch('/api/users', {
      headers: {
        Accept: "application/json"
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

  export function fetchAllTeams() {
    return fetch('/api/teams', {
      headers: {
        Accept: "application/json"
      }
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/teams') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}.`
        );
      }
    });
  }
export function fetchUser(params) {
    return fetch(`/api/users/${params}`, {
        headers: {
            Accept: "application/json"
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


export function fetchTeam(params) {
    return fetch(`/api/teams/${params}`, {
        headers: {
            Accept: "application/json"
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

//   REFACTOR this will end up being /users/user/teams i think
  export function fetchUserTeams(params) {
    return fetch(`/api/users/user/${params}`, {
        // return fetch(`/api/users/${params}`, {
        headers: {
            Accept: "application/json"
        },
    }).then(resp => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(
          `oops!! fetch('/api/users/user/${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
        );
      }
    });
  }
// REFACTOR this is nothing, but i'm having an idea about making the app load faster by fully populating state before/when the component mounts
//   export function fetchUserState(params) {
//       let user = fetchUser(params);
//       fetchUserTeams(user)
//   }