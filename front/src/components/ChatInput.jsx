import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatInput({ disabled, onSendMessage }) {
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
          disabled={disabled}
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
        <SendIcon disabled={disabled} sx={{color: 'white'}} onClick={handleSendMessage} />
    </Box>
  );
}

export default ChatInput;