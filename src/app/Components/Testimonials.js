"use client";
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <>
            <section className='sliderRevolution panelGap'>
                <div className='container'>
                    <div className='content mb-6'>
                        <h2 className='headingH2'>Real Voice of Users after interacting with AngelPBX.ai</h2>
                    </div>
                </div>
                <i class="fa-solid fa-arrow-right"></i>
                <div className='w-100 slidWrap'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                        }}
                        // onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={false}
                        spaceBetween={20}
                        loop={true}
                        navigation
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            type: 'fraction',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1920: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            el: ".custom-pagination",
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink '>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className='d-flex '>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' />

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager, Noventa Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid gary'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 '>
                                        <div className='d-flex '>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' />

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager, Noventa Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid blue'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 '>
                                        <div className='d-flex '>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' />

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager, Noventa Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid gary'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 '>
                                        <div className='d-flex '>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' />

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager, Noventa Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center'>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12 '>
                                        <div className='d-flex '>
                                            <Image src="/images/review1.png" alt="logo" width={343} height={426} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-sm-6 col-12'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' />

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time. </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager, Noventa Group</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="custom-pagination"></div>
                </div>
            </section >
        </>
    )
}

export default Testimonials