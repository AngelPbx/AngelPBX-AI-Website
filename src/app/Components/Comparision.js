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

                    <div className='fetureBox'>
                        <div className='listingName'>
                            <div className='listing_hed'>
                                <h4 className='heading4'>Feature</h4>
                            </div>
                            <ul className='ps-0'>
                                <li className='feature_listing'><p>Unified Communication Suite (Voice, Video, Messaging)</p></li>
                                <li className='feature_listing'><p>Conversational AI (Chatbots & Virtual Agents)</p></li>
                                <li className='feature_listing'><p>Call Control Features (Routing, Barring, Queues)</p></li>
                                <li className='feature_listing'><p>AI-Driven PBX System</p></li>
                                <li className='feature_listing'><p>Interactive Web-Based Admin Dashboard</p></li>
                                <li className='feature_listing'><p>Real-Time Call Translation & Multilingual Interface</p></li>
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
                                <h4 className='heading4'>Others</h4>
                            </div>
                            <ul className='ps-0'>
                                <li className='feature_listing'> <i className="fa-regular fa-xmark"></i></li>
                                <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                                <li className='feature_listing'><i className="fa-regular fa-xmark"></i></li>
                            </ul>
                        </div>

                    </div>




                </div>
            </section>
        </>
    )
}

export default Comparision