import React from 'react';
// import Header from './Header';
import Banner from './Banner';
import MainFeature from './MainFeature';
import GameListing1 from './GameListing1';
import GameListing from './GameListing';
// import Footer from './Footer';
// import WhatsAppFollow from './components/WhatsAppFollow';
import '../App.css';  // Import global styles

function HomePage() {
  return (
    <div className="App">
      {/* Header Section */}
      {/* <Header /> */}

      {/* Banner Ad Section */}
      <Banner />

      {/* Main Feature Section */}
      <MainFeature />

      {/* Game List Section */}
      <GameListing1 />
      <GameListing/>
      {/* WhatsApp Follow Icon */}
      {/* <WhatsAppFollow /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default HomePage;
