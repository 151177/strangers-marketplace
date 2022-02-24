import './Messages.css';

const Messages = ({ user }) => {
    return (
        <div className="messages">
            <h2>Inbox</h2>
            {user.messages.map((message) =>
                <div className="single-message">
                    {user.username !== message.fromUser.username &&
                        <>
                            <br></br>
                            <div className="from-label">From: </div>,
                            <div className="from">{message.fromUser.username}</div>,
                            <div className="message-label">Message: </div>,
                            <div className="message">{message.content}</div>
                            <br></br>
                        </>
                    }
                </div>
            )}
            <h2>Sent</h2>
            {user.messages.map((message) =>
                <div className="single-message">
                    {user.username === message.fromUser.username &&
                        <>
                            <br></br>
                            <div className="from-label">To: </div>
                            {user.username !== message.fromUser.username &&
                                <div className="from">{message.fromUser.username}</div>
                            }<br></br>
                            <div className="message-label">Message: </div>,
                            <div className="message">{message.content}</div>
                            <br></br>
                        </>
                    }
                </div>
            )}
        </div>
    )
}

export default Messages;