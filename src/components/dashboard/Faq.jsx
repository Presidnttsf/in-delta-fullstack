import React, { useEffect } from 'react'

export default function Faq({ handlePathChange }) {

    useEffect(() => {
        // Call handlePathChange with the current path when the component mounts
        handlePathChange(window.location.pathname);
    }, []);


    return (
        <>

            {/* sub-heading */}
            <div className="sub-heading pt-5 d-flex align-items-center justify-content-between">
                <h2>FAQ's</h2>
                <div className="chat-w-supp d-flex align-items-center">
                    <img
                        src="images/chat-support.svg"
                        className="img-fluid chat-support-icon"
                    />
                    <h6 className="chat-support-text ps-3">Chat with Support</h6>
                </div>
            </div>
            {/* accordian */}
            <div className="faq-main pt-4">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="accordion_container">
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>What is Lorem Ipsum?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>
                                        Lorem Ipsum is simple dummy text of the printing and
                                        typesetting industry. Lorem ipsum has been the industry's
                                        standard dummy text over since the 1500s. when a unknow
                                        printer took a gallery of type and scrambled it to make a type
                                        specimen book.it has survived not only five conturies. But
                                        also the leap into electronic typesetting. remaining
                                        essentially unchanged.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>Why do we use it?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>Second Accordian Body, it will have description</p>
                                </div>
                            </div>
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>Where does it come from?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>Third Accordian Body, it will have description</p>
                                </div>
                            </div>
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>Where can i get some?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>Third Accordian Body, it will have description</p>
                                </div>
                            </div>
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>Lorem Ipsum is simple dummy text?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>Third Accordian Body, it will have description</p>
                                </div>
                            </div>
                            <div className="accordion_tab">
                                <div className="accordion_head d-flex align-items-center justify-content-between pb-3">
                                    <h6>Lorem Ipsum is simple dummy text?</h6>
                                    <span className="plusminus">+</span>
                                </div>
                                <div className="accordion_body" style={{ display: "none" }}>
                                    <p>Third Accordian Body, it will have description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src="/dist/images/faq-accord.png" className="img-fluid ps-4" />
                    </div>
                </div>
            </div>
        </>
    )
}
