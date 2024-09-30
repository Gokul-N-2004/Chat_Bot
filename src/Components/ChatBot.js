import React, { useState } from 'react';
import bot from './images/download.png';
import Button from "react-bootstrap/Button"
import ChatMessages from './ChatMessages';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import utils from './utils';
import moment from 'moment';



export default function ChatBot() {

    const [messages, setMessages] = useState([
        {
            message: "Hai, Can I Know Your Sweet Name?"
        }
    ])

    const [text, setText] = useState('');

    const onSend = () => {

        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {

            const reply = utils(text)
            list = [...list, { message: reply }];

        }
        else {

            list = [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: `How Can I Help You? ${text}`,
                },
            ];
        }
        setMessages(list)
        setText("")

        setTimeout(() => {

            document.querySelector("#copyright").scrollIntoView();
        }, 1);
    };






    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>

                <img src={bot} alt='logo' height={150} width={200}></img>

                <h2 className='text'>Chat-Bot / Help-Bot</h2>

            </div>

            <div className='chat-message'>
                {messages.length > 0 && messages.map((data) => <ChatMessages {...data} />)}



                <div className='d-flex mt-2'>

                    <input type='text' className='form-control' value={text} onChange={(event) => setText(event.target.value)} />
                    <Button type="primary" className='ms-2' onClick={onSend} >
                        Send
                        </Button>
                </div>
                <div id='copyright' className='mt-3'>Copyrights Reserved</div>
            </div>





        </div>
    )
}
