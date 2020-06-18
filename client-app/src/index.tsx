import * as React from 'react';
import * as ReactDOM from 'react-dom';
import dotenv from 'dotenv'
import "./index.css";
import App from "./App";

// this code is from auth0, found at https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-2/#Building-the-Frontend-with-React-and-TypeScript
// import { Auth0Provider } from './contexts/auth0-context';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from "./react-auth0-spa";
// import config from "./auth_config.json";
import history from "./utils/history";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

let domainString: string = `${process.env.AUTH0_DOMAIN}`
let clientString: string = `${process.env.AUTH0_CLIENT_ID}`

if (process.env.NODE_ENV !== 'production') {
  


  // [domain: `${process.env.AUTH0_DOMAIN}`, client_id: `${process.env.AUTH0_CLIENT_ID}`, redirect_uri={window.location.origin}]
  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(
      

      // [key: string]
      <Auth0Provider
        // domain={`${process.env.AUTH0_DOMAIN}`}
        // client_id={`${process.env.AUTH0_CLIENT_ID}`}
        auth0Options={
          {"domain": "lizalexandry.auth0.com", 
          "client_id": `${process.env.AUTH0_CLIENT_ID}`, 
          "redirect_uri":`${window.location.origin}`}
        }
        onRedirectCallback={onRedirectCallback}
      >
      <App />
    </Auth0Provider>, 

document.getElementById('root'));
});

} else {
  
  ReactDOM.render(
    
    <Auth0Provider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Auth0Provider>, 

document.getElementById('root'));

}
  // ReactDOM.render(
  // // <React.StrictMode>
  //     <App />,
  // // </React.StrictMode>,
  //     document.getElementById('root')
  // );