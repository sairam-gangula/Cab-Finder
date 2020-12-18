import React, { useContext } from "react";
// import { CartContext } from "../listings/ProductContext";.
import { Navbar, Nav, Badge, NavDropdown, Button } from "react-bootstrap";
import {GlobalContext, GlobalState} from '../context/GlobalState';

const RHnavbar = ({ id }) => {
  const {rideDetails} = useContext(GlobalContext);
  const hStyle = { color: "yellow",fontSize:"25px" ,marginLeft:"50px"};
  const MR = {
    marginLeft: "900px",
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
        scrolling dark expand="md" fixed="top"
        // backgroundColor="#E72178"
        bg="transparent"
        fontColor="white"
        opacity="10%"
        variant="light"
        expand="md"
        style={{ display: "flex"}}
      >
        <Navbar.Brand href="/cdashboard" style={hStyle}>CabFinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto" >
          <Badge variant="dark" style={MR}>Number of rides:{rideDetails.length}</Badge>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown title="Welcome!" style={DD}>
              <NavDropdown.Item href="/">LogOut</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default RHnavbar;
