// Navigation menu based on https://github.com/briancodex/react-sidebar-v1 

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import {useSelector, useDispatch} from 'react-redux';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './NavData.js';
import './NavBar.css';


function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/dashboard';
    loginLinkData.text = 'Dashboard';
  }

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Nav will have essentially two views. One for user logged in and one for not logged in. 
  // Logged in users will have the ability to go anywhere at anytime. Stretch goal to condo render shit based on where they at. 

  //Nav may be contained within a header. I don't know yet. 
  return (
    <>
      <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>

                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-text'>
              <Link onClick={() => dispatch({type: 'LOGOUT'})} to='/home'>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
    </>
    
    // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Prime Solo Project</h2>
    //   </Link>
    //   <div>
    //     <Link className="navLink" to={loginLinkData.path}>
    //       {loginLinkData.text}
    //     </Link>

    //     {user.id && (
    //       <>
            
    //         <LogOutButton className="navLink" />
    //       </>
    //     )}

        
    //   </div>
    // </div>
  );
}

export default Nav;
