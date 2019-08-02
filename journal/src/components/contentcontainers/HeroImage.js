import React from 'react';
import { Container } from 'reactstrap';
import './HeroImage.scss'

function HeroImage() {
  return (
    <>
      <Container fluid className="homeheroContainer">
        <div className="homehero">
        <p className="herooverlay">Let's Do It Together</p>
        </div>
      </Container>
    </>
  );
}

export default HeroImage;