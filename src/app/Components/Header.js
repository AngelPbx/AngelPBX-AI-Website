"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import logo from '@/Assets/images/site-logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <>
            <div className='topHead'>
                <div className='row w-100'>
                    <div className='col-xxl-11 text-center align-content-center'>
                        <p><span>We've just launched a new feature! </span> Offer 24/7 support with AI that answers questions, routes callers and send texts</p>
                    </div>
                    <div className='col-xxl-1 text-start'>
                        <button className='freshBtn '><i className="fa-regular fa-xmark"></i></button>
                    </div>
                </div>
            </div>


            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo} alt="logo" className='img' />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown className='headerItem' title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className='headerItem' title="Resources" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='headerItem' href="#">Company</Nav.Link>
                        <Nav.Link className='headerItem' href="#">Pricing</Nav.Link>
                    </Nav>
                    <div className='d-flex align-items-center'>
                        <NavDropdown className='headerItem' title="En" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <button className='textBTn me-3'>Login</button>
                        <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </Container>
            </Navbar>

        </>
    )
}

export default Header