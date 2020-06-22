import * as React from 'react';
import * as ReactDOM from 'react-dom';

import "./index.css";
import App from "./App";

import { Auth0Provider } from "./react-auth0-spa";
import history from "./utils/history";

// post-login redirect
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

if (process.env.NODE_ENV !== 'production') {
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);

    ReactDOM.render(
      <Auth0Provider
        auth0Options={
          {"domain": "lizalexandry.auth0.com", 
          "client_id": "9phvbI1esWe8ppEb0hpbgtHF8HgNiEft", 
          "redirect_uri":`${window.location.origin}`}
        }
        onRedirectCallback={onRedirectCallback}
      >
      <App />,
    </Auth0Provider>, 

document.getElementById('root'));
});

} else {
  ReactDOM.render(
    
  <Auth0Provider
    auth0Options={
      {"domain": "lizalexandry.auth0.com", 
      "client_id": "9phvbI1esWe8ppEb0hpbgtHF8HgNiEft", 
      "redirect_uri":`${window.location.origin}`}
    }
    onRedirectCallback={onRedirectCallback}
  >
    <App />,
  </Auth0Provider>, 

document.getElementById('root'));

}
  // ReactDOM.render(
  // // <React.StrictMode>
  //     <App />,
  // // </React.StrictMode>,
  //     document.getElementById('root')
  // );