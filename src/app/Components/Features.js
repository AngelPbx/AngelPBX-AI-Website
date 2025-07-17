import Image from 'next/image'
import React from 'react'

function Features() {
    return (
        <section className='features'>
            <div className='container'>
                <div className='row g-5'>
                    <div className='col-xl-12'>
                        <div className='textWrapper'>
                            <h3>
                                AI is the New Voice of Business <br />
                                Ready to Power Yours?
                            </h3>
                            <p>AngelPBX.ai meets all your business needs by unifying customer interactions calls,<br /> messages, chats, videos, and FAX—under one AI-powered platform. Discover what this <br />personal assistant can do for your firm.</p>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature1'>
                            <div className='imgWrapper'>
                                <div className='featureImgWrapper'>
                                    <Image src={`/images/features/feature_1_a.png`} className='fg1' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_1_b.svg`} className='fg2' width={155} height={130} alt="figure" />
                                </div>
                                <FeatureImageComponent light1='light_1' light2='light_2' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>AI Driven Sentiment <br />and Language Intelligence </h5>
                                <p>Finally you have this AI that understands your customers more than you do from the way they speak, by detecting sentiment and responding the same effectively. </p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature2'>
                            <div className='imgWrapper'>
                                <div className='featureImgWrapper'>
                                    <Image src={`/images/features/feature_2_a.svg`} className='fg1' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_2_b.svg`} className='fg2' width={155} height={130} alt="figure" />
                                </div>
                                <FeatureImageComponent light1='light_1_b' light2='light_2_b' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>All-in-One Call Tracking and <br />Campaign Reporting</h5>
                                <p>Measure the success of your business from real ads or offline campaigns with the aid of AI tracker that functions almost like the way your new teammate does.</p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature3'>
                            <div className='imgWrapper'>
                                <div className='featureImgWrapper'>
                                    <Image src={`/images/features/feature_3_a.svg`} className='fg1' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_3_b.svg`} className='fg2' width={155} height={130} alt="figure" />
                                </div>
                                <FeatureImageComponent light1='light_1_c' light2='light_2_c' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>Internal Communication –<br /> Video, Audio & Text</h5>
                                <p>Stay connected with your team through easy video calls, voice chats, or quick messages—all in one place. No need to switch apps.</p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature4'>
                            <div className='imgWrapper'>
                                <div className='featureImgWrapper'>
                                    <Image src={`/images/features/feature_4_a.svg`} className='fg1' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_4_b.svg`} className='fg2' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_4_c.svg`} className='fg3' width={35} height={35} alt="figure" />
                                </div>
                                <FeatureImageComponent light1='light_1' light2='light_2' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>Call Flips at your<br /> Convenience </h5>
                                <p>Finally, the entirety of the firm's calls and messages are in one spot—like from your desktop to your mobile—without dropping the call. Stay connected wherever you are.</p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature5'>
                            <div className='imgWrapper'>
                                <div className='featureImgWrapper'>
                                    <Image src={`/images/features/feature_5_a.svg`} className='fg1' width={155} height={130} alt="figure" />
                                    <Image src={`/images/features/feature_5_b.svg`} className='fg2' width={35} height={35} alt="figure" />
                                </div>
                                <FeatureImageComponent light1='light_1' light2='light_2' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>Drag and Drop IVR Designer</h5>
                                <p>Design smart IVRs without a single line of code using AngelPBX’s drag-and-drop builder. Create intelligent call flows that adapt to your customers in minutes.</p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12'>
                        <article className='feature6'>
                            <div className='imgWrapper'>
                                <Image src={`/images/features/feature_6_a.svg`} className='fg' width={245} height={190} alt="figure" />
                                <FeatureImageComponent light1='light_1' light2='light_2' />
                            </div>
                            <div className='content align-content-start'>
                                <h5>Smart In-Call AI searcher</h5>
                                <p>You don’t have to now type the exact words that you are trying to find, here AI will focus more on the context and try to bring forward all the relevant searches from the recent call timeline in few seconds</p>
                                <a>Learn More <i className='fa-solid fa-arrow-right' /></a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <Image src={'/images/features/Background.png'} className='bg' width={1440} height={500} alt="bg" />
        </section>
    )
}

export default Features

export function FeatureImageComponent({ fg, light1, light2 }) {
    return (
        <>
            <Image src={`/images/features/circle_bg.svg`} className='bg' width={155} height={155} alt="bg" />
            <Image src={`/images/features/${light1}.svg`} className='bg light1' width={155} height={155} alt="bg" />
            <Image src={`/images/features/${light2}.svg`} className='bg light2' width={155} height={155} alt="bg" />
        </>
    )
}