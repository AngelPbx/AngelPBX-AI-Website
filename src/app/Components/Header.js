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
                    <div className='col-xxl-11 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9 text-center align-content-center'>
                        <p><span>We've just launched a new feature! </span> Offer 24/7 support with AI that answers questions, routes callers and send texts</p>
                    </div>
                    <div className='col-xxl-1 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3 text-start text-xl-end text-lg-end text-end text-xxl-start'>
                        <button className='freshBtn '><i className="fa-regular fa-xmark"></i></button>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#home">  <Image src={logo} alt="logo" className='img' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle headerItem" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle headerItem" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link headerItem" href="#">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link headerItem" href="#">Pricing</Link>
                            </li>

                        </ul>
                        <div className='d-flex rightSide_group'>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle headerItem" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <i className="fa-light fa-language"></i>   */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-2'>
                                        <g clipPath="url(#clip0_53224_6275)">
                                            <path d="M4.1665 6.66663L9.1665 11.6666M3.33317 11.6666L8.33317 6.66663L9.99984 4.16663M1.6665 4.16663H11.6665M5.83317 1.66663H6.6665M18.3332 18.3333L14.1665 9.99996L9.99984 18.3333M11.6665 15H16.6665" stroke="url(#paint0_linear_53224_6275)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_53224_6275" x1="9.99984" y1="1.66663" x2="9.99984" y2="18.3333" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#305CFD" />
                                                <stop offset="1" stopColor="#6269FE" />
                                            </linearGradient>
                                            <clipPath id="clip0_53224_6275">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    EN
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>

                                </ul>
                            </li>
                            <button className='textBTn me-3'>Login</button>
                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header