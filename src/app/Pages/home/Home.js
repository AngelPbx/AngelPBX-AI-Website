"use client";

import AIRevolution from '@/app/Components/AIRevolution';
import CTA from '@/app/Components/CTA'
import FAQ from '@/app/Components/FAQ'
import Features from '@/app/Components/Features'
// import LogoImageSlider from '@/app/Components/LogoImageSlider'
import BrandTicker from '@/app/Components/BrandTicker'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import Testimonials from '@/app/Components/Testimonials';
import Comparision from '@/app/Components/Comparision';

function Home() {
    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <>
            <main className='bodytop_margin'>
                <section className='container-fluid px-3 px-xxl-5 px-xl-5 px-lg-5 px-mb-5 '>
                    <div className='banner'>
                        <div className='gardientBg'></div>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 col-md-8 col-sm-12 col-12'>
                                    <h1 className='mainHeading'>AI Meets PBX, <br />
                                        Dialer, Meet & Tracker <br />
                                        <span className='textGradient'>All-in One Hub</span>
                                    </h1>
                                    <p className='commonPara'>
                                        The future of AI-powered Communications is here. One login, One platform. With Agentic AI Agents at the core, every call, chat, and meeting are not just managed — it's mastered, designed to bring success in every step.
                                    </p>
                                    <div className='btnGroup'>
                                        <button className='primaryBtn'>Get a Demo
                                            <span className='arrow'>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </button>
                                        <button className='secondaryBtn'>Contact Sales</button>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
                                    <div className='graphBg'>
                                        <div className="animated-circle"></div>
                                        {/* <Image src='/images/home/inner_ring.svg' alt={'inner_ring'} width={570} height={570} className='inner_ring' /> */}
                                        <Image src='/images/home/banner-circle-bg.svg' alt={'banner_circle_bg'} width={621} height={620} className='inner_ring' priority />
                                        <div className='circularCanvas mobile_circularCanvas'>
                                            <Image src='/images/home/mobile-card1.svg' alt={'card'} width={261} height={177} className='card1' priority />
                                            <Image src='/images/home/mobile-card2.svg' alt={'card'} width={250} height={188} className='card2' priority />
                                        </div>
                                        <Swiper
                                            slidesPerView={1}
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                                            className="hero_slider"
                                            autoplay={{
                                                delay: 3500,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: false,
                                            }}
                                            modules={[Autoplay, EffectFade]}
                                            fadeEffect={{
                                                crossFade: true
                                            }}
                                            effect="fade"
                                        >
                                            <SwiperSlide>
                                                <div className='circularCanvas'>
                                                    <Image src='/images/home/Card-1.svg' alt={'card'} width={331} height={241} className='card1' priority />
                                                    <Image src='/images/home/Card-2.svg' alt={'card'} width={367} height={206} className='card2' priority />
                                                    <Image src='/images/home/Card.svg' alt={'card'} width={306} height={252} className='card3' priority />
                                                </div>
                                                {/* <Image src='/images/home/pbx_ring.svg' alt={'brand_logo'} width={800} height={800} className='brand_ring' /> */}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='logo_group'>
                                                    <Image src='/images/home/logo/logo-1.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo1' priority />
                                                    <Image src='/images/home/logo/logo-2.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo2' priority />
                                                    <Image src='/images/home/logo/logo-3.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo3' priority />
                                                    <Image src='/images/home/logo/logo-4.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo4' priority />
                                                    <Image src='/images/home/logo/logo-5.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo5' priority />
                                                    <Image src='/images/home/logo/logo.svg' alt={'brand_logo'} width={59} height={59} className='brand_logo' priority />

                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='logo_group'>
                                                    <Image src='/images/home/Agents-1.svg' alt={'brand_logo'} width={207} height={145} className='flip1' />
                                                    <Image src='/images/home/Agents-2.svg' alt={'brand_logo'} width={287} height={179} className='flip2' />
                                                    <Image src='/images/home/Agents.svg' alt={'brand_logo'} width={242} height={169} className='flip3' />
                                                    <Image src='/images/home/Logo.svg' alt={'brand_logo'} width={207} height={183} className='flip4' />
                                                    <Image src='/images/home/Logo-1.svg' alt={'brand_logo'} width={192} height={183} className='flip5' />
                                                    <Image src='/images/home/Logo-2.svg' alt={'brand_logo'} width={202} height={186} className='flip6' />

                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                        {/* <Image src='/images/home/outer_ring.svg' alt={'outer_ring'} width={750} height={750} className='outer_ring' /> */}
                                        {/* <Image src="images/banner.svg" alt="logo" width={720} height={776} /> */}
                                        <div className='heroTabs'>
                                            {["Cloud PBX System", "Omnichannel Messaging", "Agentic AI Agent"].map((tab, index) => (
                                                <div
                                                    key={index}
                                                    className={`heroTab ${activeTab === index ? "active" : ""}`}
                                                    onClick={() => handleTabClick(index)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.52539 1.43033C8.6108 1.47787 8.67783 1.55265 8.71579 1.64273C8.75374 1.73281 8.76044 1.833 8.73481 1.92733L7.57281 6.18742H11.8125C11.8977 6.18742 11.9811 6.21234 12.0524 6.25911C12.1237 6.30588 12.1798 6.37245 12.2137 6.45066C12.2477 6.52887 12.2581 6.61529 12.2436 6.69931C12.2291 6.78333 12.1903 6.86128 12.1321 6.92358L6.00714 13.4861C5.94043 13.5577 5.85162 13.6049 5.75492 13.6201C5.65822 13.6353 5.55922 13.6176 5.47375 13.5699C5.38828 13.5222 5.32127 13.4472 5.28345 13.3569C5.24563 13.2667 5.23919 13.1663 5.26514 13.0719L6.42714 8.81242H2.18747C2.10221 8.81241 2.01881 8.78749 1.94752 8.74073C1.87623 8.69396 1.82016 8.62738 1.7862 8.54917C1.75224 8.47097 1.74187 8.38454 1.75637 8.30052C1.77087 8.2165 1.8096 8.13855 1.86781 8.07625L7.99281 1.51375C8.05952 1.44238 8.1482 1.39539 8.24472 1.38027C8.34124 1.36515 8.44005 1.38278 8.52539 1.43033Z" fill="url(#paint0_linear_53349_4916)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_53349_4916" x1="11.4186" y1="-1.14625" x2="1.22242" y2="11.0444" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#AAADFA" />
                                                                <stop offset="1" stopColor="#568BFF" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    {tab}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <BrandTicker />
                <AIRevolution />
                <Comparision />
                <Features />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
        </>
    )
}

export default Home