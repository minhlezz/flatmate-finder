import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FlatmatePage from './pages/flatmate';
import ProfilePage from './pages/Profile';
import HouseHold from './pages/houseHold';
import RegisterPage from './pages/registerPage';
import loginPage from './pages/loginPage';
import { AuthProvider } from './context/auth-context';
import AuthRoute from './utils/AuthRoute';
import PrivateRoute from './utils/PrivateRoute';
import SingleFlatmate from './pages/singleFlatmate';
import Messages from './pages/Messages';
import { MessageProvider } from './context/message-context';
import ApolloProvider from './ApolloProvider';
import HouseHoldDetail from './components/HouseHoldComponent/HouseHoldDetail/houseHoldDetail';
import AdminRoute from './utils/AdminRoute';
import DashBoard from './pages/dashboard';
import Layout from './layout';
import LandingPage from './pages/landingPage';

export default function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Layout>
              <main className="main-content">
                <Switch>
                  <Route exact path='/' component={LandingPage}></Route>
                  <AuthRoute exact path="/register" component={RegisterPage} />
                  <AuthRoute exact path="/login" component={loginPage} />
                  <Route exact path="/flatmate" component={FlatmatePage} />
                  <Route exact path="/flatmate/:ID" component={SingleFlatmate} />
                  <Route exact path="/household" component={HouseHold} />
                  <Route exact path="/household/:ID" component={HouseHoldDetail} />
                  <PrivateRoute exact path="/profile" component={ProfilePage} />
                  <PrivateRoute exact path="/messages" component={Messages} />
                  <AdminRoute path='/dashboard' component={DashBoard} />
                </Switch>
              </main>
            </Layout>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}


