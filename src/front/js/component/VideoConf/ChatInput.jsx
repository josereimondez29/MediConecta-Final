import React, { useState } from "react";

function ChatInput({ sendChatMessage }) {
    const [text, setText] = useState("");

    return (
        <form
            className="input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                sendChatMessage(text);
                setText("");
            }}
        >
            <input value={text} placeholder="Type here..." onChange={(e) => setText(e.target.value)} />
            <button type="submit">Send message</button>
        </form>
    );
}

export default ChatInput;

