import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import { Button } from './Button';
import Photos from './pages/Photos';


function Navigation() {
  return (
    <div className='container'>
      <div className='nav__header'>
        <p>Hauptquartier</p>
      </div>
      <div className='nav__menu'>
            <Nav.Link className='nav__effect' href="#Games">Games</Nav.Link>
            <Nav.Link className='nav__effect' href="/Photos">Photos</Nav.Link>
            <Nav.Link className='nav__effect' href="#Front end">Front End Web</Nav.Link>
      </div>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Alif</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Games">Games</Nav.Link>
            <Nav.Link href="/Photos">Photos</Nav.Link>
            <Nav.Link href="#Front end">Front End Web</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info" bg='light'>Search</Button>
          </Form>
      </Navbar> */}
     </div>
  )
}

export default Navigation
