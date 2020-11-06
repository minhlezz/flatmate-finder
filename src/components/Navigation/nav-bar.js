import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './sider-bar';
import './navbar.css';
import AuthContext from '../../context/auth-context';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => { setSidebar(!sidebar) };
    const context = useContext(AuthContext)


    return (
        <>
            <header>
                <div className='navbar-header'>
                    {!context.token && (
                        <NavLink to='/auth' className='menu-bars'>
                            <FaIcons.FaUser />
                        </NavLink>
                    )}
                    {context.token && (
                        <>
                        <NavLink to='#' className='menu-bars exit-icon' onClick={context.logout}>
                            <FaIcons.FaSignOutAlt />
                        </NavLink>
                        </>
                    )}

                    <NavLink to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavLink>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <NavLink to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </NavLink>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>


        </>
    )



}

export default Navbar;