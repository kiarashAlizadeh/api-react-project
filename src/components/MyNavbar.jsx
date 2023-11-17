import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
function MyNavbar() {
  const expand = 'md';
  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-orange-300 mb-3">
        <Container>
          <Navbar.Brand
            href="#"
            className="flex items-center font-Lalezar fs-4"
          >
            <img src={logo} alt="logo" className="w-10" />
            {'\u00A0'}
            {'\u00A0'}
            بلاگ کیارش علیزاده
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="flex items-center font-Lalezar fs-4"
              >
                <img src={logo} alt="logo" className="w-10" />
                {'\u00A0'}
                {'\u00A0'}
                بلاگ کیارش علیزاده
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  خانه
                </NavLink>
                <NavLink className="nav-link" to="/add-article">
                  ساخت مقاله
                </NavLink>
                <NavLink className="nav-link" to="/about-us">
                  درباره ما
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
