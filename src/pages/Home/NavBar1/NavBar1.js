import React from "react";
import { Container, FormControl, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './NavBar1.css';

const NavBar1 = () => {
    const searchBar = () => {
        let element = document.getElementById('search_nav');
        element.classList.toggle('search_visibility');
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Mat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/men">Men</Nav.Link>
                            <Nav.Link href="/women">Women</Nav.Link>
                            <Nav.Link href="/login">login</Nav.Link>
                            <Nav.Link href="/register">register</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" style={{lineHeight: '18px', marginLeft: '12px'}}>
                                <i style={{ fontSize: '28px' }} class="far fa-user"></i>
                                <br />
                                <span style={{ fontSize: '15px', margin: '0px 0px 0px -8px' }}>profile</span>
                            </Nav.Link>
                            <Nav.Link href="#kldjkfd" style={{lineHeight: '18px', marginLeft: '10px'}}>
                                <i style={{ fontSize: '28px' }} class="fas fa-shopping-bag"></i>
                                <br />
                                <span style={{ fontSize: '15px' }}>Bag</span>
                            </Nav.Link>
                            <Nav.Link onClick={searchBar} style={{ marginLeft: '10px' }}>
                                <i class="fas fa-search"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* this one is for search bar */}
            <Navbar id="search_nav" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginTop: '10px', padding: '20px 0px'}}>
                <Container>
                    <InputGroup>
                        <FormControl
                        placeholder="Search Your Product"
                        />
                        <InputGroup.Text id="basic-addon2" style={{cursor: 'pointer'}}>Search</InputGroup.Text>
                    </InputGroup>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar1;
