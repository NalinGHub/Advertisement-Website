import React, {useState} from 'react'
import logoImage from '../content/assets/images/logo.png'
import {
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function WebsiteNavbar() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="md">
        <Navbar.Brand as={Link} to="/">
          <img width={35} height={35} src={logoImage} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} />
        <Navbar.Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Nav.Item>
              <Nav.Link as={Link} to="/">Solar Gators</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/events">Events</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/sponsors">Sponsors</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/team">The Team</Nav.Link>
            </Nav.Item>
          </Nav>

          <Button color="" className="btn-orange" as={Link} to="/contact">
            <i class="fas fa-envelope-open mr-3"></i>
            Contact
          </Button>

          <Button color="primary" className="ml-4" onClick={() => { window.location.href = "https://www.facebook.com/UFSolarGators/" }}>
            <i class="fas fa-flag-checkered mr-3"></i>
            Join
          </Button>
        </Navbar.Collapse>
      </Navbar>
  )
}
