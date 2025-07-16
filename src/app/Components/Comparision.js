import Image from 'next/image'
import React from 'react'

const Comparision = () => {
    return (
        <>
            <section className='fetureBox_Wrap panelGap'>
                <div className='container'>
                    <div className='content'>
                        <h2 className='headingH2 mb-3'>Here’s what makes
                            AngelPBX.ai unique from all</h2>
                        <p className='commonPara text-center paragraphWidth'>Ever wondered how it would have been if your customized AI manages every communication channel without any extra tools? That’s what we bring to you now — check out and then decide for yourself . </p>
                    </div>

                    <div className='feturewrap position-relative'>
                        <div className='fetureBoxContainer'>
                            <div className='fetureBox'>
                                <div className='listingName'>
                                    <div className='listing_hed'>
                                        <h4 className='heading4'>Key Features & Capabilities </h4>
                                    </div>
                                    <ul className='ps-0'>
                                        <li className='feature_listing'><p>AI-Powered Virtual Agent <span>Handles customer interactions, queries, and tasks just like a human</span></p></li>
                                        <li className='feature_listing'><p>Smart Cloud PBX <span>Complete virtual phone system with call routing, voicemail, HD audio, and more</span></p></li>
                                        <li className='feature_listing'><p>Unified Messaging Hub <span>Engage customers across WhatsApp, SMS, email, Facebook, and more—all in one view</span></p></li>
                                        <li className='feature_listing'><p> Call Intelligence & Analytics <span>Monitor call sources, agent performance, call logs, recordings & real-time insights</span></p></li>
                                        <li className='feature_listing'><p> Visual IVR Designer <span>Drag-and-drop call flow builder for dynamic, customized IVR experiences</span></p></li>
                                        <li className='feature_listing'><p> AI-Enhanced Video Meetings <span>Secure, smart meetings with HD video, screen sharing, and productivity tools</span></p></li>
                                    </ul>
                                </div>
                                <div className='listingName'>
                                    <div className='listing_hed'>
                                        <Image src="/images/sit-logo-blue.svg" alt="logo" width={183} height={26} className='desk_futureLogo' />
                                        <Image src="/images/Top-logo.svg" alt="logo" width={96} height={120} className='mobile_futureLogo' />
                                    </div>
                                    <ul className='ps-0'>
                                        <li className='feature_listing'> <Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing border-bottom-0'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <button className='primaryBtn w-100'>Get Started Now
                                            <span className='arrow'>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </button>
                                    </ul>
                                </div>
                                <div className='listingName'>
                                    <div className='listing_hed'>
                                        <h4 className='heading4'>Call Tracking Tools </h4>
                                    </div>
                                    <ul className='ps-0'>
                                        <li className='feature_listing'> <i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                    </ul>
                                </div>
                                <div className='listingName'>
                                    <div className='listing_hed'>
                                        <h4 className='heading4'>Omnichannel Messaging Tools </h4>
                                    </div>
                                    <ul className='ps-0'>
                                        <li className='feature_listing text-center'> <i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing text-center'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                        <li className='feature_listing text-center'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing text-center'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing text-center'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing text-center'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /></li>
                                    </ul>
                                </div>
                                <div className='listingName'>
                                    <div className='listing_hed'>
                                        <h4 className='heading4'>Traditional Phone Systems </h4>
                                    </div>
                                    <ul className='ps-0'>
                                        <li className='feature_listing text-center'><i className="fa-regular fa-xmark"></i></li>
                                        <li className='feature_listing listing_flexBox'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /><span> Limited functions available</span></li>
                                        <li className='feature_listing listing_flexBox'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /><span> Limited channels</span></li>
                                        <li className='feature_listing listing_flexBox'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /><span>Limited reporting </span></li>
                                        <li className='feature_listing listing_flexBox'><Image src="/images/tick.svg" alt="tick" width={42} height={42} /><span>Static or limited IVR</span></li>

                                        <li className='feature_listing text-center'><i className="fa-regular fa-xmark"></i></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>




                </div>
            </section>
        </>
    )
}

export default Comparision