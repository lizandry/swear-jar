import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  function fetchUser(params: number) {
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
  
  function componentDidMount() {
      fetchUser(1)
      // REFACTOR this is hardcoded. might not need to be?
        .then(data => console.log('user data', data))
  
    }
  return (
    <div className="App">
      <header className="App-header">
        {/* {console.log('fetchAllUsers', fetchAllUsers)} */}
        <button
          onClick={() => componentDidMount()}> button
          </button>
      </header>
    </div>
  );
}

export default App;
