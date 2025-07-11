import React from 'react'

function FAQ() {
    return (
        <section className='faq panelGap'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-xl-4 col-lg-5 mb-3'>
                        <div className='textWrapper'>
                            <h3>
                                Frequently <br />Asked Questions
                            </h3>
                            <p>Got question? we've got answers! browse our FAQ or reach out anytime-we're here to help make you your journey smooth sailing</p>
                            <button className='secondaryBtn'>Help Center</button>
                        </div>
                    </div>
                    <div className='col-xl-8'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    What makes our AI agent different from everyone else?
                                </button>

                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        AngelPBX.AI brings does not bring to you a bot tool – rather it brings to you and your firm an AI Agent that does the work of a human, round the clock. During calls, AI agents comprehend the caller through the accent, tone and adapts quickly as per to the same.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Does the AI adapt to multiple languages?
                                </button>

                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Yes, for sure. AI agents does not only respond to the query of the customer but it does also adapt to the regional fluency of the customer and responds effectively, without even needing any more translation tools.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    How does your Visual IVR make communication easier?
                                </button>

                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our Visual IVR lets you build call flows just by dragging and placing elements, no coding or complex setup needed. You can easily map out how calls should be handled, add options like call forwarding or voicemail, and update it anytime. It’s quick, flexible, and helps your customers get to the right person faster.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    How does Smart Search in AngelPBX.AI work?
                                </button>

                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Smart Search makes it easy to find anything- calls, contacts, messages, or notes, in just a prompt. Whether it’s a name, number, or part of a conversation, the system instantly shows what you’re looking for. It saves time and helps you stay organized without digging through data.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    How does the Unified Inbox help manage all customer messages?
                                </button>

                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        It brings all your messages like calls, chats, emails, and more into one clean inbox. Each message goes to the right person fast, so nothing gets missed. AI helps you reply quicker and smarter on every channel.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                    Can AI auto-reply to every query that comes forward?
                                </button>

                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Yes, it does. AI Agents are made in such a way that does allow them to create effective replies to each of the queries brought forward in all the channels, thus increasing the net growth of the firm together.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                    What is the functionality of 'Auto-Join and Record Bot'?
                                </button>

                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        If you ever miss a meeting, you don’t need to worry as the Auto-Join Bot will join it for you, record everything, and even capture key takeaways. After the meeting, you’ll get a full recording, plus a quick summary of what was discussed so you're always updated.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                    How does Multi-Source Call Tracking help my business?
                                </button>

                                <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        It shows where your calls come from like Google and Social media ads, emails, websites, or others. You can see which source brings the most calls and best leads. This enables your team to figure out profitability accordingly.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                    How does Call Scheduling take place through AngelDialer?
                                </button>

                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        AngelDialer uses smart scheduling with the help of TimeZone Optimization, which means that it automatically detects the local time of every lead and schedules call accordingly.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                    How does your system help agents respond better during live calls?
                                </button>

                                <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        With the help of AngelDialer, your agents will have the ease of getting instant replies, quick resolution to the given issues and better recommendations instantly during live calls that will enable them to communicate better and smartly.
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