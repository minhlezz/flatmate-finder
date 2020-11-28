import React from 'react';
import { Carousel } from 'react-bootstrap';

function ProfileImages() {
  const url = 'https://1.bp.blogspot.com/-emHO_9HVxGU/WZazwgy8_rI/AAAAAAAAAhs/3Zg7j4TZAlM2gMovjXK4FAEf3ju55hmEwCLcBGAs/s1600/18881967_131782964052220_5128435195745790304_n.jpg'
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={url}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel "
          src={url}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src={url}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default ProfileImages;