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
                        <p className='commonPara text-center paragraphWidth'>AngelPBX.ai is your AI-powered command center—bringing every call, chat, and team together in one smart platform.</p>
                    </div>
                </div>
                <div className='slider_wrap' >
                    <div className='tabSwiper'>
                        {["AI-Powered SmartPBX", "Humanoid AI Agent", "Omnichannel Platforms", "AngelTracker AI", "AI-Powered Video Calls", "AngelDialer"].map((tab, index) => (
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
                                            <h3 className='heading_H3'>Your 24/7 AI Agent Always Ready</h3>
                                            <p className='paragraph3'>Enable human-like communications to take place instantly with our AngelECHO (AI) - working round the clock for you, in multiple dialects </p>
                                            <ul className='ai_list'>
                                                <li>In-depth learning of the caller's purpose and sentiment</li>
                                                <li>No waiting lines, just faster resolutions  </li>
                                                <li>Work across all time zones, channels </li>
                                                <li>Speak like a person in multiple languages</li>
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
                                            <h3 className='heading_H3'>Track calls, leads, and performance (AngelTracker AI) </h3>
                                            <p className='paragraph3'>Track calls, leads, and performance (AngelTracker AI) </p>
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