"use client";

import AIRevolution from '@/app/Components/AIRevolution';
import CTA from '@/app/Components/CTA'
import FAQ from '@/app/Components/FAQ'
import Features from '@/app/Components/Features'
// import LogoImageSlider from '@/app/Components/LogoImageSlider'
import Feature from '@/app/Components/Feature';
import LogoImageSlider from '@/app/Components/LogoImageSlider'
import ReviewSlider from '@/app/Components/ReviewSlider';
import Image from 'next/image'
import React from 'react'

function Home() {
    return (
        <>
            <main>
                <section className='container-fluid px-5'>
                    <div className='banner'>
                        <div className='gardientBg'></div>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-6'>
                                    <h1 className='mainHeading'>AI Meets PBX, <br />
                                        Dialer, Meet & Tracker <br />
                                        <span className='textGradient'>All-in One Hub</span>
                                    </h1>
                                    <p className='commonPara'>
                                        Explore AI voice infrastructure with AngelPBX.ai, unifying voice, chat, <br />
                                        and video for smarter communication runs 24/7.
                                    </p>
                                    <div className='btnGroup'>
                                        <button className='primaryBtn'>Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                                        <button className='secondaryBtn'>Contact Sales</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='graphBg'>
                            <Image src="images/banner.svg" alt="logo" width={720} height={776} />
                        </div>
                    </div>
                </section>
                <LogoImageSlider />
                <AIRevolution />
                <Feature />
                <ReviewSlider />

                <Features />
                <FAQ />
                <CTA />
            </main>
        </>
    )
}

export default Home