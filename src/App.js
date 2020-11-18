import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navigation/nav-bar';
import FlatmatePage from './pages/flatmate';
import ProfilePage from './pages/Profile';
import HomePage from './pages/Home';
import RegisterPage from './pages/registerPage';
import loginPage from './pages/loginPage';
import { Container } from 'semantic-ui-react'
import { AuthProvider } from './context/auth-context';
import AuthRoute from './utils/AuthRoute';
import PrivateRoute from './utils/PrivateRoute';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container fluid>
          <Navbar />
          <main className="main-content">
            <Switch>
              <AuthRoute exact path="/register" component={RegisterPage} />
              <AuthRoute exact path="/login" component={loginPage} />
              <Route exact path="/flatmate" component={FlatmatePage} />
              <Route exact path="/homepage" component={HomePage} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
            </Switch>
          </main>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )
}


