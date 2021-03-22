import React from 'react';
import { Carousel } from 'react-bootstrap';

function ProfileImages() {
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aZFSAbPo6OMJKsZU4jolegRZj3dde7CxCQ&usqp=CAU'
  return (
    <Carousel>
      <Carousel.Item>
        <img
          alt='a1'
          className="d-block carousel"
          src={url}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt='a2'
          className="d-block carousel "
          src={url}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt='a3'
          className="d-block carousel"
          src={url}
        />
      </Carousel.Item>
    </Carousel>

  )
}

export default ProfileImages;