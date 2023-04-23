import React from 'react';
import { Container, Navbar as BsNavbar, Nav, Button } from 'react-bootstrap';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleMenu = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  closeMenu = () => {
    this.setState({ expanded: false });
  };

  render() {
    const { expanded } = this.state;

    return (
      <BsNavbar expand="lg" fixed="top" expanded={expanded} onToggle={this.toggleMenu}>
        <Container>
          <BsNavbar.Brand href="#page-top">Celine Is Awesome</BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BsNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="#services" onClick={this.closeMenu}>
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portfolio" onClick={this.closeMenu}>
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" onClick={this.closeMenu}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#team" onClick={this.closeMenu}>
                  Team
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" onClick={this.closeMenu}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </BsNavbar.Collapse>
        </Container>
      </BsNavbar>
    );
  }
}

export default Navbar;
