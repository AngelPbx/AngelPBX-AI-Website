"use client";
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

const ReviewSlider = () => {
    return (
        <>
            <section className='sliderRevolution panelGap'>
                <div className='container'>
                    <div className='content'>
                        <h2 className='headingH2 mb-3'>Real Voice of Users after interacting with AngelPBX.ai</h2>
                    </div>
                    <div className='container'>


                        <Swiper
                            // onSwiper={setSwiperRef}
                            slidesPerView={1}
                            centeredSlides={false}
                            spaceBetween={30}
                            pagination={{
                                type: 'fraction',
                            }}
                            // breakpoints={{
                            //     640: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 20,
                            //     },
                            //     768: {
                            //         slidesPerView: 4,
                            //         spaceBetween: 40,
                            //     },
                            //     1024: {
                            //         slidesPerView: 5,
                            //         spaceBetween: 50,
                            //     },
                            //     1920: {
                            //         slidesPerView: 7,
                            //         spaceBetween: 50,
                            //     },
                            // }}
                            navigation={false}
                            // modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='sliderContent reviewSlid'>
                                    <div className='row wi-100 align-items-center'>
                                        <div className='col-6 '>
                                            <div className='d-flex '>
                                                <Image src="/images/review1.png" alt="logo" width={343} height={426} />
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className=' d-flex gap-3 flex-column'>
                                                <Image src="/images/noventa.png" alt="logo" width={215} height={32} />

                                                <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                                <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                                <div className='client_info mt-3'>
                                                    <h6>— Lena Moore</h6>
                                                    <p> Operations Manager, Noventa Group</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide> <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-6'>
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
                                    <div className='col-6 '>
                                        <div className='d-flex justify-content-end align-items-center'>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} />
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-6'>
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
                                    <div className='col-6 '>
                                        <div className='d-flex justify-content-end align-items-center'>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} />
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide> <div className='sliderContent'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-6'>
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
                                    <div className='col-6 '>
                                        <div className='d-flex justify-content-end align-items-center'>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} />
                                        </div>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewSlider