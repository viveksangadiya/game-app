import React from 'react';
import Banner from './Banner';
import MainFeature from './MainFeature';
import GameListing1 from './GameListing1';
import GameListing from './GameListing';
import '../App.css'; // Import global styles

function HomePage() {
  return (
    <div className="App" style={styles.pageContainer}>
      {/* Banner Section */}
      {/* <Banner /> */}
      <MainFeature />

      {/* Main Content Section */}
      <main style={styles.mainContent}>
        {/* Introduction Section */}
        <section style={styles.section}>
          <h1 style={styles.heading}>Indiluckgame.com – Enjoy Rummy Games and Win Real Money!</h1>
          <p style={styles.paragraph}>
            Want to play rummy and earn real money? Start your rummy journey with Indiluck Game. We are one of the most
            trusted rummy platforms in the nation, offering the best gaming experience along with opportunities to earn
            real money. Whether you're an expert rummy player or a beginner, our platform is the perfect place for you.
            Experience a user-friendly interface equipped with cutting-edge technology for an interactive gaming
            experience.
          </p>
        </section>

        {/* Key Features Section */}
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Download Our Best Rummy App for Real Money for a Great Experience!</h2>
          <p style={styles.paragraph}>
            At Indiluck, we offer exceptional features to make your rummy game exciting. Dive into our world of
            state-of-the-art technology and discover the ultimate rummy experience:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>Rummy Game Variants:</strong> Play Points, Pool, and Deals Rummy anytime, anywhere. Participate
              in the largest weekend tournaments and enjoy your favorite variations.
            </li>
            <li>
              <strong>Real-Money Rummy:</strong> Challenge yourself with exciting cash games and big tournaments where
              your skills can earn you significant rewards.
            </li>
            <li>
              <strong>Great User Interface:</strong> Navigate effortlessly through our app, designed with smooth
              gameplay, fast loading times, stunning visuals, and crisp audio.
            </li>
            <li>
              <strong>Secured Gaming Platform:</strong> Enjoy hassle-free withdrawals and deposits with enhanced
              security features, ensuring your data is always safe.
            </li>
          </ul>
        </section>

        {/* Bonuses and Promotions Section */}
        <section style={styles.section}>
          <h3 style={styles.subHeading}>Win Exciting Bonuses, Rewards, and Promotions at Indiluckgame.com!</h3>
          <p style={styles.paragraph}>
            Enjoy daily bonuses, referral rewards, and exclusive offers while playing our popular games like Master
            Teenpati. We ensure that your gaming experience is always fun and rewarding, giving you more chances to win
            big.
          </p>
          <p style={styles.paragraph}>
          Best rummy app download –  Check out from classic Rummy to great variations, Indiluckgame.com has everything
          you need for a top-notch Rummy experience. Download now!
          </p>
        </section>

        {/* Game Listings */}
        <GameListing1 />
        <GameListing />
      </main>
    </div>
  );
}

const styles = {
  pageContainer: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f9f9f9',
    color: '#333',
    padding: '20px 10px',
  },
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '15px',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#34495e',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    lineHeight: '1.8',
  },
};

export default HomePage;
