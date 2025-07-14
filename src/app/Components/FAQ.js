import React from 'react'

function FAQ() {
    return (
        <section className='faq panelGap' id="faq">
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-xl-4 col-lg-5 mb-3'>
                        <div className='textWrapper'>
                            <h3>
                                Frequently <br />Asked Questions
                            </h3>
                            <p>Got Questions? We’ve Got You Covered. Find quick answers to common queries about AngelPBX.AI now</p>
                            <button className='secondaryBtn'>Help Center</button>
                        </div>
                    </div>
                    <div className='col-xl-8'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    What makes our AI Agent different from the rest?
                                </button>

                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        AngelPBX.AI gives you more than just a chatbot it gives you a smart, human-like AI Agent that works 24/7. This AI can dial calls, talk to customers, track conversations, and understand how someone feels just by their voice, tone, or words. It even speaks multiple languages, so it can switch from English to Spanish, Hindi, or any other language in real time making every customer feel understood. Whether it’s helping a customer, qualifying a lead, or routing a call to the right team, the AI Agent does it all quickly, accurately, and without missing a lead.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    How does your Visual IVR make communication easier?
                                </button>

                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Visual IVR lets you build call flows just by dragging and placing elements, no coding or complex setup needed. You can easily map out how calls should be handled, add options like call forwarding or voicemail, and update it anytime. It’s quick, flexible, and helps your customers get to the right person faster.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    How does the Unified Inbox help manage customer messages and team communication?
                                </button>

                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        The Unified Inbox brings all your customer messages—calls, chats, emails, and more—into one place. Every message reaches the right person fast, so nothing gets missed. At the same time, your team can chat internally, share notes, and get instant help from other departments—without switching tools. With AI assisting across channels, replies are faster, smarter, and everyone stays connected.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    How does AngelPBX.AI make video meetings easier for everyone?
                                </button>

                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        AngelPBX.AI makes meetings smooth and easier than before. You get clear voice and video, real-time translation so everyone can speak in their own language, and an Auto-Join Bot that joins, records, and shares a quick summary if you can’t attend. While you focus on talking, AI handles the rest so meetings stay on track and everyone stays connected.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    How does the AI Tracker help your business grow?
                                </button>

                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        The AI Tracker checks every call, gives it a score, and shows where your leads are coming from—like Google, social media, emails, or your website. It also tracks which calls turn into real customers, so you know what’s working and which campaigns bring the best results.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ