// Navigation menu based on https://github.com/briancodex/react-sidebar-v1 


import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <>
      <div className='navbar'>
        <div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className='nav-heading-container'>
          <h2>Harvester</h2>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* If user.id is a thing, show the stuff. otherwise only show logout  */}
           {user.id != null ? 
            SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })
            : ''
          }
            <li className='nav-text'>
              <Link onClick={() => dispatch({type: 'LOGOUT'})}  to='/home'>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
    </>
  );
}

export default Nav;
