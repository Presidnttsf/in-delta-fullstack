import React from 'react'

export default function ChatWithSupport(props) {
    if (!props.visible) return;
    return (
        <div style={{
            position: "absolute",
            zIndex: "10", top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "75%"
        }}>
            <div style={{
                position: "absolute", zIndex: "10", top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "75%",
            }}>
                <div className="modal-content p-4">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Admin</h5>

                    </div>
                    <div className="modal-body">
                        <div className="notofication-msg-main">
                            <div className="notofication-msg d-flex align-items-center mb-3">
                                <div className="not-msg-text">

                                    <h6 className="pb-2">This chat with support</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', }}>
                        <input type="text" style={{ height: "35px", width: "100%", borderRadius: "5px" }} />
                        <div style={{
                            position: 'absolute', top: "5px", right: "10px"

                        }} >
                            <span >  <img src="/images/Shape.svg" alt="shape" /></span>
                            <span >  <img src="/images/paperclip.svg" alt="shape" /></span>
                            <span style={{ margin: "1px" }}>  <img src="/images/Path 8183.svg" alt="shape" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
