import React from 'react';
import { Container, Navbar as BsNavbar, Nav } from 'react-bootstrap';
import './styles/Navbar.css';

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
      <BsNavbar className="custom-navbar" expand="lg" fixed="top" expanded={expanded} onToggle={this.toggleMenu}>
        <Container>
          <BsNavbar.Brand href="#" className="text-white">Web Developer</BsNavbar.Brand>
          <button
            className={`hamburger hamburger--squeeze ${expanded ? "is-active" : ""}`}
            type="button"
            aria-label="Menu"
            aria-controls="basic-navbar-nav"
            aria-expanded={expanded}
            onClick={this.toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <BsNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="#home" onClick={this.closeMenu} className="text-white">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" onClick={this.closeMenu} className="text-white">
                  About me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portfolio" onClick={this.closeMenu} className="text-white">
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" onClick={this.closeMenu} className="text-white">
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
