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

const AIRevolution = () => {

    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

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
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <>
            <section className='sliderRevolution panelGap'>
                <div className='container'>
                    <div className='content'>
                        <div className='gradientTextBox'>
                            <p>Join the AI Revolution</p>
                        </div>
                        <h2 className='headingH2 mb-3'>Wondering what makes us the best? Check for yourself</h2>
                        <p className='commonPara text-center paragraphWidth'>AngelPBX.ai is your AI-powered command center—bringing every call, chat, and team together in one smart platform.</p>
                    </div>
                </div>
                <div className='slider_wrap'>
                    <div className='tabSwiper'>
                        {["AI Powered SmartPBX", "Omnichannel", "AI Agent", "SmartDial AI", "Voice Intelligence"].map((tab, index) => (
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
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        // watchSlidesVisibility={true}
                        centeredSlides={true}

                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                        modules={[FreeMode, Navigation]}
                        navigation
                        className="tabSwiper2 contxtSlid"
                    >
                        <SwiperSlide>
                            <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12 '>
                                        <div className='slidListContent'>
                                            <h3 className='heading_H3'>Run Smarter Phone Systems (SmartPBX)</h3>
                                            <p className='paragraph3'>Smarter calls, happier teams—AI handles routing, learns caller behavior, and powers your business phone system.</p>
                                            <ul className='ai_list'>
                                                <li>Automatically routes calls to the right person/team</li>
                                                <li>Perceives caller behavior for better service</li>
                                                <li>Set up smart voice menus without codes</li>
                                                <li>Filters out spam calls using DTMF Input</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/slider-img1.png" alt="abc" width={465} height={449} />
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
                                            <h3 className='heading_H3'>Run Smarter Phone Systems (SmartPBX)</h3>
                                            <p className='paragraph3'>Smarter calls, happier teams—AI handles routing, learns caller behavior, and powers your business phone system.</p>
                                            <ul className='ai_list'>
                                                <li>Automatically routes calls to the right person/team</li>
                                                <li>Perceives caller behavior for better service</li>
                                                <li>Set up smart voice menus without codes</li>
                                                <li>Filters out spam calls using DTMF Input</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/slider-img1.png" alt="abc" width={465} height={449} />
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
                                            <h3 className='heading_H3'>Run Smarter Phone Systems (SmartPBX)</h3>
                                            <p className='paragraph3'>Smarter calls, happier teams—AI handles routing, learns caller behavior, and powers your business phone system.</p>
                                            <ul className='ai_list'>
                                                <li>Automatically routes calls to the right person/team</li>
                                                <li>Perceives caller behavior for better service</li>
                                                <li>Set up smart voice menus without codes</li>
                                                <li>Filters out spam calls using DTMF Input</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/slider-img1.png" alt="abc" width={465} height={449} />
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
                                            <h3 className='heading_H3'>Run Smarter Phone Systems (SmartPBX)</h3>
                                            <p className='paragraph3'>Smarter calls, happier teams—AI handles routing, learns caller behavior, and powers your business phone system.</p>
                                            <ul className='ai_list'>
                                                <li>Automatically routes calls to the right person/team</li>
                                                <li>Perceives caller behavior for better service</li>
                                                <li>Set up smart voice menus without codes</li>
                                                <li>Filters out spam calls using DTMF Input</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/slider-img1.png" alt="abc" width={465} height={449} />
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
                                            <h3 className='heading_H3'>Run Smarter Phone Systems (SmartPBX)</h3>
                                            <p className='paragraph3'>Smarter calls, happier teams—AI handles routing, learns caller behavior, and powers your business phone system.</p>
                                            <ul className='ai_list'>
                                                <li>Automatically routes calls to the right person/team</li>
                                                <li>Perceives caller behavior for better service</li>
                                                <li>Set up smart voice menus without codes</li>
                                                <li>Filters out spam calls using DTMF Input</li>
                                            </ul>
                                            <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-12 col-12  '>
                                        <div className='d-flex justify-content-end align-items-center slidBox'>
                                            <Image src="/images/slider-img1.png" alt="abc" width={465} height={449} />
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