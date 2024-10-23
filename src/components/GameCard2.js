import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const GameCard2 = ({ game }) => {
  return (
    <Box
      component="li"
      display="flex"
      flexDirection="row"
      alignItems="flex-start" // Align items to the top (left-align text)
      sx={{
        padding: '4px',
        borderBottom: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left: Game Image */}
      <Box
        component="img"
        src={game.image}
        alt={game.name}
        sx={{
          width: '60px',
          height: '60px',
          marginRight: '12px',
          objectFit: 'contain',
          borderRadius: '8px',
        }}
      />

      {/* Middle: Game Info */}
      <Box flexGrow={1} display="flex" flexDirection="column" alignItems="flex-start"> {/* Aligned to the left */}
        {/* Game Name */}
        <Typography variant="h5" component="h3" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          {game.name}
        </Typography>

        {/* Bonus Info */}
        <Typography variant="body2" component="p" sx={{ color: 'gray', marginTop: '2px' }}>
          {game.bonus}
        </Typography>

        {/* Minimum Withdrawal */}
        <Typography variant="body2" component="p" sx={{ color: 'gray', marginTop: '2px' }}>
          {game.minWithdrawal}
        </Typography>
      </Box>

      {/* Right: Download Button */}
      <Button
        variant="contained"
        color="primary"
        href={game.downloadLink}
        startIcon={<DownloadIcon />}
        sx={{
          marginLeft: '12px',
          padding: '6px 12px',
          fontSize: '12px',
          backgroundColor: '#e80000',
          color: 'white',
          textTransform: 'none',
          alignSelf: 'center',
          '&:hover': {
            backgroundColor: '#0056b3',
          },
        }}
      >
        Download
      </Button>
    </Box>
  );
};

export default GameCard2;
