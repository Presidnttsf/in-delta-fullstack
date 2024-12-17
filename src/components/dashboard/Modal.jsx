import React from 'react'

export default function Modal(props) {
    // console.log("checking modal props:", props)
    if (!props.visible) {
        return null;
    } else {
        return (
            <div style={{
                position: "absolute", zIndex: "10", top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <div className="modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <a onClick={props.onClose} className="" data-bs-dismiss="modal" aria-label="Close"><img
                            src="images/close-button.svg"
                            className="img-fluid close-button-img" /></a>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Alert!</h5>

                        </div>
                        <div className="modal-body">
                            <div className="notofication-msg-main">
                                <div className="notofication-msg d-flex align-items-center mb-3">
                                    <div className="not-msg-text">

                                        <h6 className="pb-2">{props.message}</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
