import React from 'react';
import { Container, Media } from 'reactstrap';
import './Testimonials.scss'

const Testimonials = (props) => {
  return (
    <>
    <Container fluid className="testimonialsIntro">
      <h1 className="testimonialsHeader">
        What Our Members Are Saying
      </h1>
    </Container>
    <Container className="testimonialContainer" fluid>
      <article className="testimonialText">
        <p>Our members will be the first to tell you - forLife is a life-changer. Hear their stories, and learn what it's like to be a member of the forLife family.</p>
      </article>
      <Container fluid className="testimonials">
      <Media>
        <Media left>
          <img className="avatar" src="https://i.ibb.co/PTC6hQy/jane-headshot.png" alt="Generic placeholder" />
        </Media>
        <Media body>
          "forLife keeps me on track" - Jane D
        </Media>
    </Media>
    <Media>
        <Media left>
          <img className="avatar" src="https://i.ibb.co/Sw4V7Jk/brian-headshot.png" alt="Generic placeholder" />
        </Media>
        <Media body>
          "Building muscle has never been easier" - Brian E
        </Media>
    </Media>
    <Media>
        <Media left>
          <img className="avatar" src="https://i.ibb.co/ygjw1ps/suze-headshot.png" alt="Generic placeholder" />
        </Media>
        <Media body>
          "Now I can track all of my exercises - whenever and wherever" - Suze M
        </Media>
    </Media>
    <Media>
        <Media left>
          <img className="avatar" src="https://i.ibb.co/5c6dfgj/lee-headshot.png" alt="Generic placeholder" />
        </Media>
        <Media body>
          "I just joined, and I already know I'm a member for life" - Lee L
        </Media>
    </Media>
      </Container>
    </Container>
    </>
  );
};

export default Testimonials;