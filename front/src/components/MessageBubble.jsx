import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

function MessageBubble({ message, isUserMessage }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isUserMessage ? 'flex-end' : 'flex-start',
        marginBottom: 2,
      }}
    >
      <Paper
        sx={{
          padding: 1.5,
          maxWidth: '80%',
          borderRadius: 2,
          backgroundColor: isUserMessage ? '#afd9ec' : '#D3D3D3',
        }}
      >
        <Typography variant="body1" sx={{
          wordBreak: 'break-word',
          whiteSpace: 'normal'
        }}>
          {message}
        </Typography>
      </Paper>
    </Box>
  );
}

export default MessageBubble;
