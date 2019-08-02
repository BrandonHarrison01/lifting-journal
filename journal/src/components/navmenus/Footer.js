import React from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

import './Footer.scss';

function Footer() {
  return (
    <>
      <Navbar className="ftr fixed-" color="light" light expand="md">
        <Nav className="ml-auto" navbar>
            <NavItem>
              <span className="footerLink">Copyright © 2019</span>
            </NavItem>
          </Nav>
      </Navbar>
    </>
  );
}

export default Footer;