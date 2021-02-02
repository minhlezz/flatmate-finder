import React from 'react';
import '../styles/footer.css';
import { Row, Col, Container } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react';

function Footer() {

    return (
        <footer>
            <Container className="footer-layout" fluid>
                <Row className="footer-menu">
                    <Col>
                        CONTACT US
                        <p>Address: 27 Streetname, ward Ward, city City</p>


                        <p>Email: shareaccomnodation@realworld.com</p>


                        <p>Phone: (+84) 931 322 111</p>


                        <p>Fax: +55.44.22.13.33 </p>
                    </Col>

                    <Col>
                        LINKS
                        <p>About us</p>
                        <p>Contact</p>
                        <p>Home</p>
                        <p>Flatmate</p>
                    </Col>
                    <Col>
                        <p>SOCIAL MEDIA</p>
                        <Icon name="facebook" size = "large" />
                        <Icon name="linkedin" size = "large" />
                        <Icon name="twitter" size = "large" />
                        <Icon name="instagram" size = "large" />
                    </Col>
                </Row>
                <Row className="footer-copyright">
                    <p> &copy; Share Accommodation </p>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer