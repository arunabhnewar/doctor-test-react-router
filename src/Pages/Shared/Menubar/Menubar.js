import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css';
import logo from '../../../images/Banner&Background/logo.png';

const Menubar = () => {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img src={logo} alt="" />
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#home" className="menu-text fw-bold">Home</Nav.Link>
                        <Nav.Link href="#shop" className="menu-text fw-bold">Shop</Nav.Link>
                        <Nav.Link href="#about" className="menu-text fw-bold">About</Nav.Link>
                        <Nav.Link href="#contact" className="menu-text fw-bold">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;