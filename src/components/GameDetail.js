import React from "react";
import { Box, Typography, Button, Divider } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet"; // For setting meta tags

const GameDetail = () => {
  const location = useLocation(); // Access location state
  const navigate = useNavigate();
  const game = location.state?.game; // Get the passed game data

  if (!game) {
    // Redirect back to the listing if no data is found
    navigate('/');
    return null;
  }

  return (
    <Box
      sx={{
        padding: { xs: '16px', sm: '32px' },
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
      }}
    >
      {/* Meta Tags */}
      <Helmet>
        <title>{game.metaTitle}</title>
        <meta name="description" content={game.metaDesc} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XKBKLZ1T4"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6XKBKLZ1T4');
          `}
        </script>
      </Helmet>

      {/* Game Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#333',
        }}
      >
        {game.heading}
      </Typography>

      {/* Game Image */}
      <Box
        component="img"
        src={game.image}
        alt={game.title}
        sx={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '24px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* Short Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#555',
          marginBottom: '24px',
          textAlign: 'justify',
        }}
      >
        {game.shortDesc}
      </Typography>

      <Divider sx={{ margin: '24px 0' }} />

      {/* Features Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '16px',
          color: '#222',
          textAlign: 'center',
        }}
      >
        {game.heading2}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '16px',
          lineHeight: '1.8',
          whiteSpace: 'pre-line',
          color: '#555',
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        {game.feature}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '16px',
          lineHeight: '1.8',
          whiteSpace: 'pre-line',
          color: '#555',
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        {game.last}
      </Typography>

      <Divider sx={{ margin: '24px 0' }} />

      {/* Download Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '32px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          href={game.downloadLink}
          target="_blank"
          sx={{
            padding: '12px 24px',
            textTransform: 'none',
            fontSize: '18px',
            borderRadius: '24px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          Download {game.title}
        </Button>
      </Box>
    </Box>
  );
};

export default GameDetail;
