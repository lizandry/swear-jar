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

//   COMPLETE!!
export function fetchUser(params: number) {
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

// COMPLETE!!
export function getTeam(params: number) {
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

  export function getTeams(params: number[]) {
    return fetch(`/api/teams?ids=${params}`, {
        headers: {
            Accept: "application/json"
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

  export function postTeam(params) {
    return fetch(`/api/teams/`, {
        method: 'POST',
        body: JSON.stringify(params),
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

  
