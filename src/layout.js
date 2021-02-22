import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navigation/nav-bar';
import Footer from './pages/footer';


function Layout({ children }) {

    return (
        <Container fluid>
            <Navbar />
            {children}
            {/* <Footer /> */}
        </Container>
    )
}

export default Layout;