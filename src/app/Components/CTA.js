import Image from 'next/image'
import React from 'react'

function CTA() {
    return (
        <section className='cta'>
            <div className='container h-100'>
                <div className='row h-100 align-items-center'>
                    <div className='col-xl-6 col-12'>
                        <div className='textWrapper'>
                            <h3>Ready to power your <br /> business <span className='textGradient'>calls with AI?</span></h3>
                        </div>
                        <div className='d-flex'>
                            <button className="primaryBtn me-3">Get a Demo <i className="fa-solid fa-arrow-right"></i></button>
                            <button className='secondaryBtn'>Contact Sales</button>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <div className='chipWrapper'>
                            <div className='chip'>
                                SmartDial AI
                            </div>
                            <div className='chip'>
                                AI Powered SmartPBX
                            </div>
                            <div className='chip'>
                                Video and Voice Intelligence
                            </div>
                            <div className='chip'>
                                Omnichannel Messaging
                            </div>
                            <div className='chip'>
                                Personalize AI Agent
                            </div>
                        </div>
                        <div className='logoWrapper'>
                            <div className='apbx-logo' />
                            {/* <Image alt="logo" src={'/images/cta/apbx-static.svg'} width={400} height={400} /> */}
                        </div>

                    </div>
                </div>
            </div>
            <Image alt="background" className='bg' src={'/images/cta/background.svg'} width={1440} height={500} />
        </section>
    )
}

export default CTA