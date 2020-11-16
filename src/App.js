import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookingPage from './pages/Bookings';
import './App.css';
import FlatmatePage from './pages/flatmate';
import Navbar from './components/Navigation/nav-bar';
import ProfilePage from './pages/Profile';
import HomePage from './pages/Home';
import RegisterPage from './pages/registerPage';
import loginPage from './pages/loginPage';

export default function App() {

  // state = {
  //   token: null,
  //   userId: null,
  // };

  // login = (token, userId, tokenExpiration) => {
  //   this.setState({
  //     token: token,
  //     userId: userId
  //   });
  // };

  // logout = () => {
  //   this.setState({
  //     token: null,
  //     userId: null
  //   });
  // }
  // return (
  //   <BrowserRouter>
  //     <>
  //       <AuthContext.Provider
  //         value={{
  //           token: this.state.token,
  //           userId: this.state.userId,
  //           login: this.login,
  //           logout: this.logout
  //         }}>
  //         <Navbar />
  // <main className="main-content">
  //   <Switch>
  //     {!this.state.token && (
  //       <Route path="/auth" component={AuthPage} />
  //     )}
  //     <Route path="/homepage" component={HomePage} />
  //     <Route path="/flatmate" component={FlatmatePage} />
  //     <Route path="/profile" component={ProfilePage} />
  //     <Route path="/bookings" component={BookingPage} />
  //   </Switch>
  // </main>

  //       </AuthContext.Provider>
  //     </>
  //   </BrowserRouter>
  // );

  return (

    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Switch>
          <Route path="/login" component={loginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/flatmate" component={FlatmatePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/bookings" component={BookingPage} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}


