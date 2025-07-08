import CTA from '@/app/Components/CTA'
import FAQ from '@/app/Components/FAQ'
import Features from '@/app/Components/Features'
// import LogoImageSlider from '@/app/Components/LogoImageSlider'
import Image from 'next/image'
import React from 'react'

function Home() {
    return (
        <>
            <section className='container-fluid px-5'>
                <div className='banner'>
                    <div className='gardientBg'></div>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-xl-6 col-12'>
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
                        <div className='logoGroup'>

                        </div>
                    </div>
                    <div className='graphBg'>
                        <Image src="images/banner.svg" alt="logo" width={720} height={776} />
                    </div>
                </div>
            </section>

            <Features />
            <FAQ />
            <CTA />
        </>
    )
}

export default Home