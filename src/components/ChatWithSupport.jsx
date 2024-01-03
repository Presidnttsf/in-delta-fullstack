import React, { useState, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function ChatWithSupport(props) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [time, setTime] = useState();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [showEmoji, setShowEmoji] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const fileInputRef = useRef(null);

    const handleSendMessage = () => {
        if (newMessage.trim() === '' && selectedFiles.length === 0) return;

        // Add the new message to the messages state
        const userMessage = { text: newMessage, sender: 'user', images: selectedFiles.length > 0 ? selectedFiles : null };
        const adminMessage = { adminText: "Thank you for your message, will respond shortly!!!", sender: 'admin' };
        setMessages([...messages, userMessage, adminMessage]);

        // Clear the input field and reset state after sending the message
        setNewMessage('');
        const d = new Date();
        setTime(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setSelectedFiles([]);
        setShowEmoji(false);
        setChosenEmoji(null);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        } else if (e.key === 'Backspace') {
            // Handle backspace to clear previous emoji
            setNewMessage(newMessage.slice(0, -1));
        }
    };

    const handlePaperClipClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleRemove = (index) => {
        // Create a new array without the file at the specified index
        // console.log("handle remove clicked: ", index)
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };
    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const fileArray = Array.from(files).map(file =>
                ({ url: URL.createObjectURL(file), file })
            );
            setSelectedFiles(prevFiles => [...prevFiles, ...fileArray]);
        }
    };

    const handleEmojiClick = () => {
        setShowEmoji((prevShowEmoji) => !prevShowEmoji);
    };

    const onEmojiClick = (event) => {
        setNewMessage((msg) => msg + event.emoji);
        setChosenEmoji(event.emoji);
    };

    if (!props.visible) return null;

    return (
        <div style={{
            position: 'absolute',
            zIndex: '10',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '75%'
        }}>
            <div style={{
                position: 'absolute',
                zIndex: '10',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '75%',
            }}>
                <div className="modal-content p-4">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Admin</h5>
                    </div>
                    <div className="modal-body">
                        <div className="notofication-msg-main">
                            <div>
                                <h6 className="pb-2">Welcome to chat support</h6>
                                {messages.map((item, index) => (
                                    <div key={index} style={{ textAlign: item.sender === 'user' ? 'right' : 'left', }}>
                                        <span style={{ color: "black" }}> {time} </span>{' '}
                                        {item.text && (
                                            <p className="pb-2 mb-3" style={{
                                                padding: '5px',
                                                borderRadius: '10px',
                                                border: '1px solid #ccc',
                                                marginBottom: '5px',
                                                fontSize: '12px',
                                                color: 'black',
                                                display: 'inline-block',
                                                backgroundColor: '#F1F1F5'
                                            }}>{item.text}</p>
                                        )}
                                        {item.images && (
                                            <div style={{ textAlign: item.sender === 'user' ? 'right' : 'left', }}>


                                                {item.images.map((image, i) => (



                                                    <div key={i}>
                                                        {/* {console.log("itemimages: ", item.images)} */}

                                                        <p>File: {image && image.file && image.file.name}</p>
                                                        <img width={100} src={image.url} alt={`uploaded-${i}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {item.adminText && (
                                            <p className="pb-2 mb-3" style={{
                                                padding: '5px',
                                                borderRadius: '10px',
                                                border: '1px solid #ccc',
                                                marginBottom: '5px',
                                                fontSize: '12px',
                                                color: 'black',
                                                display: 'inline-block',
                                            }}>{item.adminText}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            style={{ height: '35px', width: '100%', borderRadius: '5px', fontSize: '15px', padding: "2px" }}
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder='write your message here'
                            onKeyDown={handleKeyPress}
                        />

                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '5px',
                            right: '4px',
                        }}>
                            <span>  <img src="/images/Shape.svg" alt="shape" onClick={handleEmojiClick} /></span>
                            <span style={{ marginLeft: '1px' }}>  <img src="/images/paperclip.svg" alt="shape" onClick={handlePaperClipClick} /></span>
                            <span onClick={handleSendMessage}>  <img src="/images/Path 8183.svg" alt="shape" /></span>
                        </div>
                        {showEmoji && (
                            <EmojiPicker height={400} width={600} onEmojiClick={onEmojiClick} />
                        )}
                        {selectedFiles.map((file, index) => (
                            <div key={index} style={{ position: 'relative', display: 'inline-block', marginRight: '5px', marginTop: '10px' }}>
                                <button
                                    onClick={() => handleRemove(index)}
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '2px',
                                        zIndex: '1',
                                        borderRadius: "50%",
                                        backgroundColor: 'red',
                                        fontWeight: "bold"
                                    }}
                                >
                                    X
                                </button>
                                <img src={file.url} alt={`selected-${index}`} width={100} style={{ display: 'block' }} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
