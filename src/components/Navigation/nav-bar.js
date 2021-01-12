import React, { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { AuthContext } from '../../context/auth-context';

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    return (
        <>
            <header>
                <div className='navbar-header'>
                    {!user && (<NavLink to='/login' className='menu-bars'>
                        <FaIcons.FaUser />
                    </NavLink>)}
                    <NavLink to='/household' className='menu-bars'>
                        <AiIcons.AiFillHome />
                    </NavLink>
                    <NavLink to='/flatmate' className='menu-bars'>
                        <IoIcons.IoMdPeople />
                    </NavLink>
                    {user && (<NavLink to='/profile' className='menu-bars'>
                        <FaIcons.FaRegNewspaper />
                    </NavLink>)}
                    {user && (<NavLink to='/messages' className='menu-bars'>
                        <FaIcons.FaEnvelopeOpenText />
                    </NavLink>)}
                    <NavLink to='/support' className='menu-bars'>
                        <IoIcons.IoMdHelpCircle />
                    </NavLink>
                    {user && (<NavLink to='#' className='menu-bars exit-icon'>
                        <FaIcons.FaSignOutAlt onClick={logout} />
                    </NavLink>)}
                </div>
            </header>


        </>
    )



}

export default Navbar;