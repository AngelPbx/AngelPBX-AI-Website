import React from 'react'

function FAQ() {
    return (
        <section className='faq'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-xl-4'>
                        <div className='textWrapper'>
                            <h3>
                                Frequently <br />Asked Questions
                            </h3>
                            <p>Got question? we've got answers! browse our FAQ or reach out anytime-we're here to help make you your journey smooth sailing</p>
                            <button className='secondaryBtn'>Help Center</button>
                        </div>
                    </div>
                    <div className='col-xl-7'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    What makes AngelPBX.AI different from other tools?
                                </button>

                                <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    Is AngelPBX.ai good for remote or hybrid teams?
                                </button>

                                <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    What types of messages can I manage in AngelPBX.ai?
                                </button>

                                <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                    How does AngelPBX.ai help with spam or unwanted calls?
                                </button>

                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                    Can I search for past calls and messages?
                                </button>

                                <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                    What is the Smart Tracker in AngelPBX.ai?
                                </button>

                                <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Employee development software includes skill assessments, individual learning plans, competency matrices, and progress tracking.
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