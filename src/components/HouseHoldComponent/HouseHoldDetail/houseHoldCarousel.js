import React from 'react';
import { Carousel } from 'react-bootstrap';

function HouseHoldCarousel() {
    const url = "https://abcland.vn/wp-content/uploads/2020/07/Apartment-la-gi.jpg";
    return (
        <Carousel style={{
            width: "800px",
            height: "400px"
        }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url}
                    alt="First slide"
                    style={{
                        maxWidth: "800px",
                        maxHeight: "400px"
                    }}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={url}
                    style={{
                        maxWidth: "800px",
                        maxHeight: "400px"
                    }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>2nd slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HouseHoldCarousel;