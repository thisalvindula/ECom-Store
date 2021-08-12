import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar bg='secondary' varient='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>ECom Store</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='navi ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
