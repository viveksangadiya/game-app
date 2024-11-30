import React from 'react';
import { Box } from '@mui/material';
import GameCard2 from './GameCard2';
import '../styles/GameListing.css';

const games = [
    {
      id: 1,
      name: 'Rummy Ares',
      image: 'https://assets.agent61.com/images/share/aw_page_c_1/theme_1.png',
      description: 'Rummy Moment',
      bonus: '200k+ | Bonus ₹41',
      minWithdrawal: 'Min. Withdrawal ₹100/-',
      downloadLink: 'https://www.earntp.com/m/csyd3g',
    },
    {
      id: 2,
      name: 'Rummyse',
      image: 'https://rummybonusapp.com/kr/assets/logo/1000019092-removebg-preview.webp.webp',
      description: 'Rummy Tournament',
      bonus: '300k+ | Bonus ₹50',
      minWithdrawal: 'Min. Withdrawal ₹150/-',
      downloadLink: 'https://www.rummyse.com/share/3tkUtxy',
    },
    {
      id: 3,
      name: 'Rummy mars',
      image: 'https://rummybonusapp.com/kr/assets/logo/logo.webp.webp',
      description: 'Rummy Royale',
      bonus: '500k+ | Bonus ₹60',
      minWithdrawal: 'Min. Withdrawal ₹200/-',
      downloadLink: 'https://www.rummy-mars.vip/eWtvdF1zUUJ7fA4=',
    },
  ];
  

const GameListing = () => {
  return (
    <div className="game-listing">
      <h2 className="page-title">Popular Rummy Games</h2>
      <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
        {games.map((game) => (
          <GameCard2 key={game.id} game={game} />
        ))}
      </Box>
    </div>
  );
};

export default GameListing;
