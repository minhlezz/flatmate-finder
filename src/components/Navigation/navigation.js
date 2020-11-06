import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-navigation.css';
import AuthContext from '../../context/auth-context';


const mainNavigation = props => ( 
    


    <AuthContext.Consumer>
        {context => {
            return (
                <header className="main-navigation">
                    <div className="main-navigation_logo">
                        <h1>Logo</h1>
                    </div>
                    <nav className="main-navigation_items">
                        <ul>
                            <li>
                                <NavLink to="/flatmate">Flatmate </NavLink>
                            </li>
                            <li>
                                <NavLink to="/home-list">Home </NavLink>
                            </li>
                            {!context.token && (
                                <li>
                                    <NavLink to="/auth">Login</NavLink>
                                </li>
                            )}
                            
                            {context.token && (
                                <React.Fragment>
                                    <li>
                                        <button onClick={context.logout}>Logout</button>
                                    </li>
                                </React.Fragment>
                            )}

                        </ul>
                    </nav>
                </header>
            )
        }}

    </AuthContext.Consumer>
)

export default mainNavigation