import React from 'react'


interface UserMessage{
    name: string;
    message: string;
}
const Message = (props: UserMessage)  => {
    return (
        <div className="App">
            <p>{props.name}</p>
            <p>{props.message}</p>
        </div>
    )
}

export default Message
