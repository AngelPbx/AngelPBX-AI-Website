import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { allProducts } from '../Metadata/AllProducts';

function CTA() {
    return (
        <>
            <section className='cta desktopCta'>
                <div className='circleBg'>
                    {/* <div className='apbx-logo' /> */}
                    <Image alt="logo" src={'/images/cta/circleBg.svg'} width={767} height={460} />
                </div>
                <div className='postionWrap'>
                    <div className='chipWrapper'>
                        <div className='chip'>
                            {/* {allProducts[0].name} */}
                            Smart Cloud PBX
                        </div>
                        <div className='chip'>
                            {/* {allProducts[1].name} */}
                            Agentic AI Agents
                        </div>
                        <div className='chip'>
                            {/* {allProducts[2].name} */}
                            OmniChannel Messaging Hub
                        </div>
                        <div className='chip'>
                            {/* {allProducts[3].name} */}
                            Smart AI tracker
                        </div>
                        <div className='chip'>
                            {/* {allProducts[4].name} */}
                            AI Video Meet
                        </div>
                        <div className='chip'>
                            {/* {allProducts[5].name} */}
                            AI-powered Auto Dialer
                        </div>
                    </div>
                    <div className='logoWrapper'>
                        {/* <div className='apbx-logo' /> */}
                        <Image alt="logo" src={'/images/cta/Shape.png'} width={370} height={400} />
                    </div>

                </div>
                <div className='container h-100'>
                    <div className='row h-100 align-items-center'>
                        <div className='col-xl-6 col-12'>
                            <div className='textWrapper'>
                                <h3>Ready to power your <br /> business <span className='textGradient'>calls with AI?</span></h3>
                            </div>
                            <div className='d-flex'>
                                <button className="primaryBtn me-3">Get a Demo
                                    <span className='arrow'>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </button>
                                <button className='secondaryBtn'>Contact Sales</button>
                            </div>
                        </div>
                       
                    </div>
                </div>

                <Image alt="background" className='bg' src={'/images/cta/Background_grad.svg'} width={1440} height={500} priority />
            </section>
            <section className='cta mobileCta'>
                <div className='circleBg'>
                    {/* <Image alt="logo" src={'/images/cta/CTA.png'} width={767} height={460} /> */}
                    <Image alt="logo" src={'/images/cta/circleBg.svg'} width={767} height={460} />
                </div>

                <div className='row align-items-center'>
                    <div className='col-12 text-center'>
                        <div className='textWrapper'>
                            <h3>Ready to power your <br /> business <span className='textGradient'>calls with AI?</span></h3>
                        </div>
                        <div className='d-flex btnGroup'>
                            <button className="primaryBtn me-3">Get a Demo
                                <span className='arrow'>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </button>
                            <button className='secondaryBtn'>Contact Sales</button>
                        </div>
                    </div>
                    <div className='col-xl-12'>
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                            <div className='logoWrapper'>
                                <Image alt="logo" src={'/images/cta/Shape.png'} width={370} height={400} />
                            </div>
                            <Swiper
                                spaceBetween={20}
                                // slidesPerView={3}
                                // slidesToScroll={1}
                                slidesPerView={"auto"}
                                speed={3000}
                                loop={true}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                }}
                                centeredSlides={false}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                    1920: {
                                        slidesPerView: 7,
                                        spaceBetween: 20,
                                    },
                                }}
                                pagination={false}
                                navigation={false}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[0].name}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[1].name}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[2].name}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[3].name}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[4].name}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="chipWrapper">
                                    <div className='chip'>
                                        {allProducts[5].name}
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                </div>

                <Image alt="background" className='bg' src={'/images/cta/Background_grad.svg'} width={1440} height={500} priority />
            </section>

            

        </>
    )
}

export default CTA