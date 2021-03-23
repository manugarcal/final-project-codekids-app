import React, { useContext, useState } from "react";
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
import { Context } from "../Store/appContext";

const Navbar2 = () => {
  const { store, actions } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <span className="brand-name" style={{ color: "red" }}>
            Code
          </span>
          <span className="brand-name" style={{ color: "yellow" }}>
            Kids
          </span>
          <span style={{ color: "blue" }}>.</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Foro">Foro</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <UncontrolledDropdown>
              <DropdownToggle nav caret>
                {!!store.currentUser && store.currentUser.user.username}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/Dashboard" className="text-black">
                    Dashboard
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/Leccion/1" className="text-black">
                    Misiones
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    href="/"
                    className="text-black"
                    onClick={actions.logout}
                  >
                    Salir
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
