import styled from "styled-components"
import React, { useEffect, useRef } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { Box } from '@mui/material';
import ChatInput from "../components/ChatInput";
import MessageBubble from "../components/MessageBubble";
import { useNavigate } from "react-router-dom";

export default function Chat() {

    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUserMessage: true },
        ]);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [messages]);

    const navigate = useNavigate()

    return (
        <PlannerContainer>
            <Header>
                <HomeIcon sx={{fontSize: '40px'}} onClick={() => navigate("/")}></HomeIcon>
                <div>Chat</div>
            </Header>
            <Box
            sx={{
                overflowY: 'auto',
                height: '70%',
                minHeight: "70%",
                paddingBottom: 2,
                paddingTop: 2,
                bgcolor: "white",
                borderRadius: "10px",
                padding: "10px 10px 0 10px",
                marginTop: '10px',
                scrollBehavior: "smooth",
            }}
            >
                {messages.map((msg, index) => (
                    <MessageBubble
                    key={index}
                    message={msg.text}
                    isUserMessage={msg.isUserMessage}
                    />
                ))}
                <div ref={messagesEndRef} />
            </Box>
            <ChatInput onSendMessage={handleSendMessage} />
        </PlannerContainer>
    )
}

const PlannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 95%;
    width: 90%;
`

const Header = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
    font-size: 30px;
    font-family: Roboto;
    color: white;
    border-bottom: 2px solid;
    padding-left: 20px;
    & > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
