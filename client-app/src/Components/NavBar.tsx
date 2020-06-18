import React from "react";
import { useAuth0 } from "../react-auth0-spa";

interface Props {
  // team?: Team
  // teamTableData?: string[]
  // getTeam?: Function;
  // postSwear?: Function;

}

const NavBar = (props: Props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;



// // this code is from auth0, found at https://auth0.com/blog/modern-full-stack-development-with-nestjs-react-typescript-and-mongodb-part-2/#Building-the-Frontend-with-React-and-TypeScript

// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { useAuth0 } from '../contexts/auth0-context';
// function Navbar() {
//     const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
//     return (
//         <header>
//             <div className="container-fluid position-relative no-side-padding">
//                 <span className="logo">
//                 {user && user.picture && <img src={user.picture} alt="My Avatar" />}
//                 {!user && <img src={'https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1513770253/WEB_FREAK_50PX-01_yaqxg7.png'} alt="My Avatar" />}
//                 </span>
//                 <div className="menu-nav-icon" data-nav-menu="#main-menu">
//                     <i className="ion-navicon" />
//                 </div>
//                 <ul className="main-menu visible-on-click" id="main-menu">
//                     <li><Link className={"nav-link"} to={"/"}> Nest React TypeScript Blog </Link></li>
//                     <li>
//                     <Link className={"nav-link"} to={"/"}>
//                         {!isLoading && !user && (
//                             <>
//                                 <button className="btn btn-dark" onClick={loginWithRedirect}>
//                                     Sign In
//                                 </button>
//                             </>
//                         )}
//                         {!isLoading && user && (
//                             <>
//                                 <div>
//                                     <label className="mr-2">{user.name}</label>
//                                     <button className="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin })}>
//                                         Sign Out 
//                                     </button>
//                                 </div>
//                             </>
//                         )}
//                     </Link>
//                     </li>
//                     <li><Link className={"nav-link"} to={"/"}> Home </Link></li>
//                     {isAuthenticated && (
//                     <li><Link className={"nav-link"} to={"/create"}> Create </Link></li>
//                     )}
//                 </ul>
//             </div>
//         </header>
//     );
// }
// export default withRouter(Navbar);