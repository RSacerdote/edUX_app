import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '16px 0 16px 0'}}>
        <TextField
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            sx={{
                marginRight: 2,
                borderRadius: 2,
                border: "white",
                bgcolor: 'white'
            }}
        />
        <SendIcon sx={{color: 'white'}} onClick={handleSendMessage} />
    </Box>
  );
}

export default ChatInput;