import React from 'react';
import chat from './images/robot.svg';
import person from './images/file-person.svg';



export default function ChatMessages(props) {
    return (
        <div className={`d-flex ${props.user && 'justify-content-end'}`}>
            {
                props.user ? (

                    <span className='message-right'>
                        <span className='message-text'>{props.message}</span>
                        <img src={person} height={17} width={17} className='message-icon' />
                    </span>
                ) :

                    <span className='message-left'>
                        <img src={chat} height={17} width={17} className='message-icon'/>
                        <span className='message-text'>{props.message}</span>

                    </span>
            }
        </div>
    )
}

