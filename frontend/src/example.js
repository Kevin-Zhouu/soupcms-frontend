import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sponsorship from "./Pages/Sponsorship";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";

import {Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap';
import { Layout } from '@douyinfe/semi-ui';


function App() {
  return (
   <Router>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container> 
     </Navbar>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>} />
       <Route path="/about" element={<Sponsorship/>}/>
       <Route path="/profile/:username" element={<Profile/>}/>
       <Route path="*" element={<Error/>}/>
       
     </Routes>
     
   </Router>
  );
}

export default App;
