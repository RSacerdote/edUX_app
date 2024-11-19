import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';

// Optional: Syntax highlighting for code blocks
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Styled components for blockquotes
const Blockquote = styled('blockquote')(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.divider}`,
  paddingLeft: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
}));

const components = {
  // Map heading levels to MUI Typography variants
  h1: ({ node, ...props }) => (
    <Typography variant="h3" gutterBottom {...props} />
  ),
  h2: ({ node, ...props }) => (
    <Typography variant="h4" gutterBottom {...props} />
  ),
  h3: ({ node, ...props }) => (
    <Typography variant="h5" gutterBottom {...props} />
  ),
  h4: ({ node, ...props }) => (
    <Typography variant="h6" gutterBottom {...props} />
  ),
  h5: ({ node, ...props }) => (
    <Typography variant="subtitle1" gutterBottom {...props} />
  ),
  h6: ({ node, ...props }) => (
    <Typography variant="subtitle2" gutterBottom {...props} />
  ),
  
  // Paragraph
  p: ({ node, ...props }) => (
    <Typography variant="body1" paragraph {...props} />
  ),
  
  // Links
  a: ({ node, ...props }) => (
    <MuiLink color="primary" {...props} />
  ),
  
  // Lists
  ul: ({ node, ...props }) => (
    <List component="ul" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <List component="ol" {...props} />
  ),
  li: ({ node, ordered, ...props }) => (
    <ListItem disableGutters>
      <ListItemText primary={<Typography variant="body1">{props.children}</Typography>} />
    </ListItem>
  ),
  
  // Code blocks
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={materialLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <Typography
        component="code"
        variant="body2"
        sx={{
          backgroundColor: 'action.hover',
          padding: '2px 4px',
          borderRadius: '4px',
          fontFamily: 'monospace',
        }}
        {...props}
      >
        {children}
      </Typography>
    );
  },
  
  // Blockquotes
  blockquote: ({ node, ...props }) => <Blockquote {...props} />,
  
  // Images
  img: ({ node, ...props }) => (
    <img style={{ maxWidth: '100%', height: 'auto' }} alt="" {...props} />
  ),
  
  // Horizontal rule
  hr: ({ node, ...props }) => (
    <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '2em 0' }} {...props} />
  ),
  
  // Emphasis and strong
  em: ({ node, ...props }) => (
    <Typography component="em" variant="body1" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <Typography component="strong" variant="body1" {...props} />
  ),
};

const MarkdownTypography = ({ children }) => {
  return (
    <ReactMarkdown components={components}>
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownTypography;
