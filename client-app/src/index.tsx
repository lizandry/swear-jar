import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";

// this code is from auth0, found at https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-2/#Building-the-Frontend-with-React-and-TypeScript
import { Auth0Provider } from './contexts/auth0-context';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
// // <React.StrictMode>
//     <App />,
// // </React.StrictMode>,
//     document.getElementById('root')
// );
if (process.env.NODE_ENV !== 'production') {

  import('react-axe').then(axe => {
    axe.default(React, ReactDOM, 1000);
    ReactDOM.render(

      <Auth0Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
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