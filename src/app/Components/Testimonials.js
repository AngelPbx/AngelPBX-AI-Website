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
                <div className='w-100 slidWrap'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                        }}

                        // // slidesPerView={3}
                        // centeredSlides={true}
                        // // spaceBetween={20}
                        // // loop={true}
                        // // navigation
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true,
                        // }}
                        // slidesPerView={"auto"}
                        // spaceBetween={30}
                        // loop={true}
                        // // watchSlidesVisibility={true}
                        // centeredSlides={true}
                        // modules={[FreeMode, Navigation, Autoplay]}
                        // navigation
                        // pagination={{
                        //     type: 'fraction',
                        // }}
                        // breakpoints={{
                        //     640: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     768: {
                        //         slidesPerView: 1,
                        //         spaceBetween: 20,
                        //     },
                        //     1024: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 20,
                        //     },
                        //     1920: {
                        //         slidesPerView: 3,
                        //         spaceBetween: 20,
                        //     },
                        // }}


                        slidesPerView={"auto"}
                        spaceBetween={0}
                        loop={true}
                        // watchSlidesVisibility={true}
                        centeredSlides={true}

                        // onSwiper={(swiper) => (swiperRef.current = swiper)}
                        // onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
                        modules={[FreeMode, Navigation]}
                        navigation
                        // className="tabSwiper2 contxtSlid"

                        className="mySwiper slidSwip"
                    >
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink '>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Airlyfare.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"AI Agent has reduced my manual dependency”</h5>
                                            <p className='para5'>AngelECHO takes care of repetitive customer questions, books meetings, and even routes calls. We’ve seen a huge drop in response time and our agents can focus on more complex tasks. It just works smoothly</p>
                                            <div className='client_info mt-3'>
                                                <h6>— Carlos Mendes</h6>
                                                <p> Support Lead</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid gary'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12 '>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Cruise_infinity.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place"</h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time</p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid blue'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Fairsfare.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"The dialer has elevated my business revenue for real"</h5>
                                            <p className='para5'>AngelPBX’s AI dialer knows when to call, who to prioritize, and skips the dead ends. Our connect rate is up, and agents now talk to actual people, not answering machines. It’s boosted our sales big time</p>
                                            <div className='client_info mt-3'>
                                                <h6>— Rachel Lin</h6>
                                                <p>Sales Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid gary'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Farefortravel.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Gogetatrip.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/infinity_travels.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Justassist.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Mydreammemory.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderContent reviewSlid pink'>
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12 '>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Pnrdecode.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
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
                                <div className='row wi-100 align-items-center justify-content-between'>
                                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-12'>
                                        <div className='logoBox'>
                                            <Image src="/images/testimonials/Webvio.png" alt="logo" width={170} height={80} className='clientImg' />
                                        </div>
                                    </div>
                                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-sm-8 col-12 ps-5'>
                                        <div className=' d-flex gap-3 flex-column'>
                                            {/* <Image src="/images/noventa.png" alt="logo" width={215} height={32} className='copany_logo' /> */}

                                            <h5 className='mt-4'>"Entirety of the business complexity is here under one place." </h5>
                                            <p className='para5'>AngelPBX.ai helped us bring together calls, WhatsApp, and emails into one easy dashboard. No more switching tabs or missing messages. The setup was fast, and our team adapted in no time </p>
                                            <div className='client_info mt-3'>
                                                <h6>— Lena Moore</h6>
                                                <p> Operations Manager</p>
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