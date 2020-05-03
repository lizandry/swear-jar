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
//   Promise.all([
// 	fetch('https://jsonplaceholder.typicode.com/posts'),
// 	fetch('https://jsonplaceholder.typicode.com/users')
// ])
// 	.then(function (responses) {
// 		// Get a JSON object from each of the responses
// 		return responses.map(function (response) {
// 			return response.json();
// 		});
// 	}).then(function (data) {
// 		// Log the data to the console
// 		// You would do something with both sets of data here
//  		console.log(data);
// 	}).catch(function (error) {
// 		// if there's an error, log it
// 		console.log(error);
// 	});



// export function fetchUser(params: number) {
//     return Promise.all([
//         fetch(`/api/users/${params}`
//         // fetch(`/api/users/user/${params}`
//     ])
    
//     fetch(`/api/users/${params}`, {
//         headers: {
//             Accept: "application/json"
//         },
//     }).then(resp => {
//       if (resp.ok) {
//         return resp.json();
//       } else {
//         throw new Error(
//           `oops!! fetch('/api/users/${params}') failed: Express server responded with HTTP ${resp.status} ${resp.statusText}`
//         );
//       }
//     });
//   }

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


export function fetchTeam(params: number) {
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