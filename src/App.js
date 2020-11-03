import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

/**Component */
import FlatmatePage from './pages/flatmate';
import HomePage from './pages/home';
import HeaderComponent from './components/Header/header';
import { FooterComponent } from './components/Footer/footer';
import AuthPage from './pages/AuthPage';
//--------------------------------------------

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <HeaderComponent />
          <Content style={{ minHeight: '100vh' }}>
            <Switch>
              <Route path="/login" component={AuthPage} />
              <Route path="/flatmate" component={FlatmatePage} />
              <Route path="/home" component={HomePage} />
            </Switch>
          </Content>
          <FooterComponent />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}


export default App;
