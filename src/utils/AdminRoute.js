import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';


const AdminRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);
    const adminEmail = 'qqq@qqq.com'
    return (
        <Route
            {...rest}
            render={(props) =>
                (user && user.email === adminEmail) ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    );
}

export default AdminRoute;