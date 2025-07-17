"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { useSwiper } from '../SwiperContext';
import { allProducts } from '../Metadata/AllProducts';

const AIRevolution = () => {

    const [activeTab, setActiveTab] = useState(0);
    const { swiperRef } = useSwiper();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    // useEffect(() => {
    //     if (thumbsSwiper && secondSwiper) {
    //         secondSwiper.controller.control = thumbsSwiper
    //     }
    // }, [thumbsSwiper, secondSwiper])

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <>
            <section className='sliderRevolution panelGap' id="products">
                <div className='container'>
                    <div className='content'>
                        <div className='gradientTextBox'>
                            <p>Join the AI Revolution</p>
                        </div>
                        <h2 className='headingH2 mb-3'>Wondering what makes us the best? Check for yourself</h2>
                        <p className='commonPara text-center paragraphWidth'>AngelPBX.ai is your AI-powered command center—bringing every call, chat, and team together in one smart platform</p>
                    </div>
                </div>
                <div className='slider_wrap' >
                    <div className='tabSwiper'>
                        {[allProducts[0].name, allProducts[1].name, allProducts[2].name, allProducts[3].name, allProducts[4].name, allProducts[5].name].map((tab, index) => (
                            <div
                                key={index}
                                className={`tabItem ${activeTab === index ? "active" : ""}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab}
                            </div>
                        ))}
                    </div>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        loop={true}
                        // watchSlidesVisibility={true}
                        centeredSlides={true}

                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
                        modules={[FreeMode, Navigation]}
                        navigation
                        className="tabSwiper2 contxtSlid"
                    >
                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>Run Smarter Phone Systems</h3>
                                            <p className='paragraph3'>Smarter Calls, happier teams - AI handles call routing, learns caller sentiment and powers up your business phone system </p>
                                            <ul className='ai_list'>
                                                <li>Auto-routes calls to the right person/team</li>
                                                <li>Smart Call Content Search enabled</li>
                                                <li>Possession of Visual IVR Builder</li>
                                                <li>Blocks spam with smart filters</li>
                                                <li>Reach anyone in seconds with smart, one-click calling</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide1.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>Your Human-Like AI Agent — Always On, Always Capable</h3>
                                            <p className='paragraph3'>Meet AIVA, your intelligent Agentic AI that goes beyond scripts and chatbots. It thinks, understands, responds, and follows through just like a real team member. Ready 24/7, fluent in multiple languages, and built to drive real outcomes.</p>
                                            <ul className='ai_list'>
                                                <li>Understands caller intent, tone & emotion in real time</li>
                                                <li>No queues — just instant, intelligent responses</li>
                                                <li>Works seamlessly across time zones, channels & touch-points</li>
                                                <li>Communicates naturally — in multiple languages, like a real person</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide5.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>One place for all conversations</h3>
                                            <p className='paragraph3'>Manage every communication channel- all your chats, texts, emails and FAX in one place with the ease of AI that does everything for your business  </p>
                                            <ul className='ai_list'>
                                                <li>Manages SMS, Emails, Fax and more from one portal  </li>
                                                <li>Enabled AI-auto replies using intent-aware  </li>
                                                <li>AI-powered Internal Messaging and effective collaboration  </li>
                                                <li>File and Media Sharing in quick seconds  </li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide2.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>Track calls, leads, and performance </h3>
                                            <p className='paragraph3'>Empower the growth of your business with the help of AngelTracker- that checks leads and tracks performance quickly </p>
                                            <ul className='ai_list'>
                                                <li>Track inbound calls from social media, campaigns and others  </li>
                                                <li>Enabled AI-powered filtering to block spam calls</li>
                                                <li>AI measures your campaign returns (ROI)  </li>
                                                <li>AI checks call scores and detects campaign leads </li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide4.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>Smarter Meetings and Calls</h3>
                                            <p className='paragraph3'>In meetings and calls, our AI auto-joins and translates and also notes down the summaries at the end for the ease of convenience of your team </p>
                                            <ul className='ai_list'>
                                                <li>High quality meetings with no background noise  </li>
                                                <li>Auto-joins and records with multi-language translation </li>
                                                <li>Sends recap instantly via Emails </li>
                                                <li>Smart scheduling as per time zones </li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide3.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <div className='chip'>
                                                {/* {allProducts[5].name} */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-1'>
                                                    <path d="M15.1785 11.6718C10.421 10.5975 9.68409 9.86053 8.60976 5.103C8.56054 4.88555 8.36699 4.73071 8.14333 4.73071C7.91967 4.73071 7.72612 4.88555 7.6769 5.103C6.60209 9.86053 5.86564 10.5975 1.10812 11.6718C0.890192 11.7215 0.735352 11.9146 0.735352 12.1382C0.735352 12.3619 0.890192 12.5549 1.10812 12.6046C5.86564 13.6795 6.60209 14.4164 7.6769 19.1734C7.72612 19.3909 7.91967 19.5457 8.14333 19.5457C8.36699 19.5457 8.56054 19.3909 8.60976 19.1734C9.68457 14.4164 10.421 13.6795 15.1785 12.6046C15.3965 12.5549 15.5508 12.3619 15.5508 12.1382C15.5508 11.9146 15.396 11.7215 15.1785 11.6718Z" fill="url(#paint0_linear_53638_7497)" />
                                                    <path d="M19.4798 4.26455C16.9507 3.69345 16.5957 3.33837 16.0246 0.809786C15.9749 0.591863 15.7818 0.4375 15.5581 0.4375C15.3345 0.4375 15.1414 0.591863 15.0917 0.809786C14.5206 3.33837 14.1655 3.69345 11.6369 4.26455C11.419 4.31425 11.2646 4.50732 11.2646 4.73098C11.2646 4.95464 11.419 5.14771 11.6369 5.19742C14.1655 5.76851 14.5206 6.12359 15.0917 8.65266C15.1414 8.8701 15.3345 9.02494 15.5581 9.02494C15.7818 9.02494 15.9749 8.8701 16.0246 8.65266C16.5957 6.12359 16.9507 5.76851 19.4798 5.19742C19.6973 5.14771 19.8521 4.95464 19.8521 4.73098C19.8521 4.50732 19.6973 4.31425 19.4798 4.26455Z" fill="url(#paint1_linear_53638_7497)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_53638_7497" x1="2.64776" y1="16.2151" x2="8.38499" y2="5.69684" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_53638_7497" x1="12.3731" y1="7.09436" x2="15.6987" y2="0.9976" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#315FFD" />
                                                            <stop offset="1" stopColor="#DE8DD6" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg> <span>AI Powered</span>
                                            </div>
                                            <h3 className='heading_H3'>Smarter Outbound Calls </h3>
                                            <p className='paragraph3'>Let AI handle outbound calls with better timing and logic- AngelDialer takes care of your customers like the way you would want them too, in seconds </p>
                                            <ul className='ai_list'>
                                                <li>Only dials when agents are ready to respond</li>
                                                <li>Shares full context before transfer of the calls </li>
                                                <li>AI-powered Auto-Dialer with precision sorting</li>
                                                <li>Easy scheduling for better follow-ups </li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo
                                                <span className='arrow'>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/airevolution/slide6.png" alt="abc" width={465} height={449} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default AIRevolution