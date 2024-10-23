import React from 'react';
import { Box, Typography, Button, Grid, Link } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Trophy icon

// Sample data for games
const games = [
  {
    id: 1,
    title: 'Master Teenpati',
    image: 'https://assets.agent61.com/images/share/aw_page_c_1/theme_1.png',
    grade: '100% SECURE',
    downloadLink: 'https://www.earntp.com/m/csyd3g',
    rank: 1,
  },
  {
    id: 2,
    title: 'Rummyse',
    image: 'https://allrummyapps.com/rummy-loot/img/rummy-loot-logo.webp',
    grade: '100% SECURE',
    downloadLink: 'https://www.rummyse.com/share/3tkUtxy',
    rank: 2,
  },
  {
    id: 3,
    title: 'Rummy mars',
    image: 'https://allrummyapps.com/rummy-loot/img/rummy-loot-logo.webp',
    grade: '100% SECURE',
    downloadLink: 'https://www.rummy-mars.vip/eWtvdF1zUUJ7fA4=',
    rank: 3,
  },
];

// Function to get trophy color based on rank
const getTrophyColor = (rank) => {
  switch (rank) {
    case 1:
      return '#FFD700'; // Gold for 1st place
    case 2:
      return '#C0C0C0'; // Silver for 2nd place
    case 3:
      return '#CD7F32'; // Bronze for 3rd place
    default:
      return 'gray'; // Default color for other ranks
  }
};

// GameCard component for each card
const GameCard = ({ game }) => {
  const trophyColor = getTrophyColor(game.rank); // Get color based on rank

  return (
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          position: 'relative', // For positioning the trophy icon
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {/* Trophy Icon with Rank */}
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: trophyColor,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: '30px', color: trophyColor }} />
          <Typography
            variant="subtitle2"
            sx={{
              position: 'absolute',
              top: '4px',
              right: '10px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            {game.rank}
          </Typography>
        </Box>

        {/* Game Image */}
        <Box
          component="img"
          src={game.image}
          alt={game.title}
          sx={{ width: '100%', maxHeight: '100px', objectFit: 'contain', marginBottom: '8px' }}
        />

        {/* Game Title */}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
          {game.title}
        </Typography>

        {/* Game Grade */}
        <Typography variant="body2" sx={{ color: 'gray', marginBottom: '8px' }}>
          {game.grade}
        </Typography>

        {/* Download Button */}
        <Link href={game.downloadLink} target="_blank" underline="none">
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            sx={{
              textTransform: 'none',
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Download
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

// GameListing component to map over the games and display GameCard for each
const GameListing1 = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Grid container spacing={2}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </Box>
  );
};

export default GameListing1;
