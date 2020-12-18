import React, { useContext } from "react";

import "./navcss.css";
// import { CartContext } from "../listings/ProductContext";.
import { Navbar, Nav, Badge, NavDropdown, Button } from "react-bootstrap";
const CustomerNav = ({ id }) => {
  const hStyle = { color: "yellow",fontSize:"25px" ,marginLeft:"50px"};
  const MR = {
    marginLeft: "1000px",
    fontSize: "25px",
    font: "yellow",
    color: "yellow",
  };
  const DD = {
    fontSize: "25px",
    font: "yellow",
    color: "yellow",
    marginRight:"10px"
  };
  return (
    <React.Fragment>
      <Navbar
        bg="transparent"
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        {/* <Navbar 
        // backgroundColor="#E72178"
        bg="transparent"
        variant="light"
        expand="md"
        style={{ display: "flex"}}
      > */}
        <Navbar.Brand href="/cdashboard" style={hStyle}>
          CabFinder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/cride"} style={MR}>
              MyRides <Badge variant="dark"></Badge>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Welcome!" style={DD}>
              <NavDropdown.Item href="/Login">LogOut</NavDropdown.Item>
              <NavDropdown.Item href="/MyProfile">My Profile</NavDropdown.Item>
            </NavDropdown>
            {/* <li className="nav-item dropdown">
        <a className="navlink dropdown-toggle" dataToggle="dropdown" role="button" ariaHaspopup="true" ariaExpanded="false" style={DD}>Welcome</a>
        <div className="dropdowMenu">
          <a className="dropdown-item" href="/">LogOut</a>
          <a className="dropdow-item" href="/customer">MY Profile</a>
         
          </div>
          </li> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Navbar> */}
      </Navbar>
    </React.Fragment>
  );
};

export default CustomerNav;
