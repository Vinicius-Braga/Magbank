import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav,  Container, ButtonGroup, Button, NavDropdown} from "react-bootstrap"
import './Navbar.scss';
import logo from '../assets/logo.svg';

const Navigation = ({handleCreateAcc}) => ( 
<Navbar variant="dark" expand="lg">
<Container>
  <Navbar.Brand href="#home">
        <Link to='/'>
            <img
              src= {logo}
              height="30"
              className="d-inline-block align-top"
              alt="Magbank logo"
            />     
        </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#cartao">Cartão</Nav.Link>
      <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
    </Nav>
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-light">
        <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
          <Link to='/login'>
              <NavDropdown.Item href="#action/3.1">
                Pessoa Física
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pessoa Jurídica
              </NavDropdown.Item>
              <NavDropdown.Divider />
          
          </Link>
        </NavDropdown>
      </Button>
      <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
    </ButtonGroup>
  </Navbar.Collapse>
</Container>
</Navbar>);

export default Navigation;