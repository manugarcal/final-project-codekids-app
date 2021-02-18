import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const NavbarIndex = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="site-navbar site-navbar-target" role="banner">
      
      <div className="container mb-3">
        <div className="d-flex align-items-center">
          <div className="site-logo mr-auto">
            <a href="/">
              CodeKids<span className="text-primary">.</span>
            </a>
          </div>
          <div className="site-quick-contact d-none d-lg-flex ml-auto ">
            <a
              href="/Login"
              className="d-flex site-info align-items-center mr-5"
            >
              <span className="block-icon mr-3">
                <i className="fas fa-sign-in-alt"></i>
              </span>
              <span>Entrar</span>
            </a>
            <a
              href="/GettingStarted"
              className="d-flex site-info align-items-center"
            >
              <span className="block-icon mr-3">
                <img
                  src="assets/spaceman01.png"
                  width="50px"
                  height="50px"
                ></img>
              </span>
              <span>Registrarme</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="menu-wrap d-flex align-items-center">
          <div>
            <Navbar light expand="md">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Inicio</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/GettingStarted">Comenzar ahora</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/About">Acerca de Nosotros</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Foro">Foros</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Faq">FaQ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Contact">Contactanos</NavLink>
                  </NavItem>
                </Nav>

                <Nav>
                  <NavItem  >
                    <NavLink className="icon-facebook text-teal d-flex float-right" href="#" ></NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink className="icon-twitter text-success d-flex float-right" href="#" ></NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink className="icon-linkedin text-yellow d-flex float-right" href="#" ></NavLink>
                  </NavItem>
                  </Nav>
                
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarIndex;

