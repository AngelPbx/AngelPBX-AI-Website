import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <section className='footer'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-xl-4 col-12'>
                        <div className='companyDetails'>
                            <div className='logoWrapper'>
                                <Image alt="logo" className='footerLogo' src='/images/footer_logo.svg' width={176} height={32} />
                            </div>
                            <p>AngelPBX.AI is an all-in-one platform that helps your team stay connected through calls, messages, meetings, and more. With built-in AI, it brings voice, video, chat, and smart tools into one place so your team can work faster, reply quicker, and give customers a better experience without jumping between apps. </p>

                            <div className='socialMedia'>
                                <button className='socialBtn'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </button>
                                <button className='socialBtn'>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </button>
                                <button className='socialBtn'>
                                    <i className="fa-brands fa-slack"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-12'>
                        <div className='linksWrapper'>
                            <div className='row'>
                                <div className='col-xl-4 col-6'>
                                    <label>Products</label>
                                    <ul>
                                        <li><a>Enterprise PBX</a></li>
                                        <li><a>Omnichannel</a></li>
                                        <li><a>Integrations</a></li>
                                        <li><a>API Documentation</a></li>
                                    </ul>
                                </div>
                                <div className='col-xl-4 col-6'>
                                    <label>Resources</label>
                                    <ul>
                                        <li><a>Change log</a></li>
                                        <li><a>API docs</a></li>
                                        <li><a>Blog</a></li>
                                        <li><a>Status page</a></li>
                                    </ul>
                                </div>
                                <div className='col-xl-4 col-6'>
                                    <label>Company</label>
                                    <ul>
                                        <li><a>About us</a></li>
                                        <li><a>Startup program</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-12'>
                        <div className='bottomFooter'>
                            <div className='row justify-content-between align-items-center'>
                                <div className='col'>
                                    <p>©2024 - 2025 AngelPBX.ai, Inc. All rights reserved.</p>
                                </div>
                                <div className='col-auto'>
                                    <a>Privacy Policy</a>
                                    <a>Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer