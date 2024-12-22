import React from "react";
import { Box, Typography, Button, Grid, Link } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

// Sample data for games
const games = [
  {
    id: 1,
    title: "Master Teenpati",
    image: "https://assets.agent61.com/images/share/aw_page_c_1/theme_1.png",
    grade: "100% SECURE",
    downloadLink: "https://www.earntp.com/m/csyd3g",
    rank: 1,
    slug: "dragon-tiger-game",
    heading: "Explore Our Most Loved Dragon Tiger Online Casino Game",
    shortDesc: `Are you a fan of casino card games? You will definitely love our dragon tiger real cash game. At Indiluckgame.com,
    we give access to our users to play this popular free card game. At our virtual gaming platform, you can play this card
    game conveniently. Our great and seamless user interface will make your casino gaming experience truly exciting.
    Players will get a daily gift to start this game. Download our rummy game app to start playing Dragon Tiger!`,
    heading2: "Standout Features From Our Dragon Tiger Real Cash Game!",
    feature: `
    Indiluckgame.com has brought you advanced and exciting versions of the Dragon Tiger game. Check out our
competitive casino card game features:
• Interactive Gameplay – Our Dragon Tiger Page casino is streamed with high-definition features for great
quality streaming with no video lags.
• Live Chat Feature – This live dealer casino game comes with a live chat feature, allowing you to engage
with Indiluckgame.com's friendly hosts and fellow players.
• Meet Professional Dealers – You can meet professional dealers in Dragon Tiger from our platform
facilitating the game through expert skills.
Move ahead to dragon tiger online game download and invite your friends to join and boost your chances of
winning. Our platform will enhance your competition in the casino game with daily and weekly tournaments.
    `,
    last: `Move ahead to dragon tiger online game download and invite your friends to join and boost your chances of
    winning. Our platform will enhance your competition in the casino game with daily and weekly tournaments`,
    metaTitle:
      "Dragon Tiger Real Cash Game | Dragon Tiger Online Game Download",
    metaDesc: `Experience the thrill of Dragon Tiger on Indiluck! Play the real cash game and download
    the best Dragon Tiger online game today.`,
  },
  {
    id: 2,
    title: "Rummyse",
    image:
      "https://rummybonusapp.com/kr/assets/logo/1000019092-removebg-preview.webp.webp",
    grade: "100% SECURE",
    downloadLink: "https://www.rummyse.com/share/3tkUtxy",
    rank: 2,
    slug: "rummy-ares-game",
    heading: "Welcome to Rummy Ares, Start Your Journey with Indiluckgame.com!",
    shortDesc: `Is it your first time to explore Rummy Ares? Explore the casino journey from our platform. We have the latest
    launched Rummy Ares APK in our app. We give instant access to our users to the Rummy Ares Page without any
    loading issues and enjoy a seamless gaming experience!`,
    heading2: `How to start a Rummy Ares app download From Our Rummy Ares Page?`,
    feature: `
    • Open your web browser and visit our official Indiluckgame.com website.
    • Look for the section of Rummy Ares or search it on the app page.
    • Select APK Version – Rummy Ares APK download option.
    • If you have to change your device setting to allow unknown sources. For this go to "Security" or "Privacy,"
setting in your device to enable "Install from Unknown Sources". This will allow you to proceed with the
Rummy Ares app download.
• Next, download the APK to start the process.
• After the download is complete, open the file and follow the instructions to install the app.
• After successful installation, open the app and log in to start playing Rummy Ares on Indiluckgame.com.
    `,
    last: `Rummy Ares is a modern twist classic card game from the Indian Subcontinent. Downloading the APK from our site
    you can play live with real players globally, anytime and anywhere, in your preferred language.`,
    metaTitle: "Rummy Ares APK Download | Rummy Ares App Download Online",
    metaDesc: `Download the Rummy Ares app on Indiluck! Enjoy seamless gameplay and win big with
    the best Rummy Ares APK download experience.`,
  },
  {
    id: 3,
    title: "Rummy mars",
    image: "https://rummybonusapp.com/kr/assets/logo/logo.webp.webp",
    grade: "100% SECURE",
    downloadLink: "https://www.rummy-mars.vip/eWtvdF1zUUJ7fA4=",
    rank: 3,
    slug: "rummy-mars-game",
    heading: "Check Out Our Rummy Mars Page To Download The Latest Version!",
    heading2: `Start Rummy Mars Game Download With Indiluckgame.com!`,
    shortDesc: `At Indiluckgame.com, we give our players access to the Rummy Mars casino game with interactive and playful
    features. It is a completely free Rummy game with three exclusive exciting modes: fast mode, classic battle, and level
    breakthrough.
    Get a unique gaming experience in each mode. Our latest APK is for both beginners and advanced rummy players to
    give them a thrilling experience. Visit our Rummy Mars Page to download it and start playing!`,
    feature: `
    • Visit our official Indiluckgame.com Website; you can open it from your tab, desktop, or laptop.
    • Navigate to our casino game download section to find Rummy Mars.
    • Click on the APK version for rummy mars game download
    • Before you start downloading, enable unknown sources access. Go to your device's settings, to enable
"Install from Unknown Sources" to proceed with successful rummy mars APK download and installation.
• Next, download the APK file and install it as directed.
• After the installation, you can launch the app and start playing Rummy Mars.
    `,
    last: `Indiluckgame.com will be your go-to platform to get access to the latest advanced version of rummy mars APK
    download. Consult us to learn more about the game and its downloading process!`,
    metaTitle: "Rummy Mars APK Download | Rummy Mars Game Download",
    metaDesc: `Download the Rummy Mars APK on Indiluck! Enjoy exciting gameplay and win real cash
    with the best Rummy Mars game download experience.`,
  },
  {
    id: 4,
    name: "Vegas casino",
    image: "https://www.vbyttu.com/img/148.png",
    description:
      "Daily VIP cashback of 50,000 Rupees ready to boost your balance!",
    bonus: "500k+ | Bonus ₹60",
    minWithdrawal: "Min. Withdrawal ₹200/-",
    downloadLink: "https://www.vbyttu.com/AiI2MlPGe1JWQdVaUqUM",
    slug: "vegas-casino-game",
    heading: `Vegas Casino – The Popular Casino Slot Game to Play on Indiluckgame.com!`,
    heading2: `Exciting Offers You Will Witness Vegas Casino Online Game!`,
    shortDesc: `Are you fond of casino slot games? If yes, Indiluckgame.com has great news for you! You can now play the famous
    Vegas Casino online game and earn real money from our platform. We will be your most reliable casino platform to
    download Vegas casinos. You will get a bonus of ₹60 and withdraw ₹200/.`,
    feature: `
    Here is what you will experience from our Vegas casino online real money game.
    • Endless Bonus Offers
    • Casino Rewards Programs
    • Huge Jackpots
    • Real Cash Wins
    • Tournaments
    • Live Events
    • Live Dealer Games
    `,
    last: `You can instantly download the game without any hassles by visiting our Vegas Casino Page. We are the most
    trusted and reliable platform with 500K+ successful downloads. By visiting our office page, you can find the download
    link for the game. Clicking on it, you will directly land on the official page of the Vegas casino.
    Downloading it, you will get access to 100+ slot games and win real money daily. You can explore more with live
    dealers and learn a lot about the available casino games from the platform.
    Move ahead and download the Vegas Casino online game at Indiluckgame.com!`,
    metaTitle: "Vegas Casino Online Game | Vegas Casino Online Real Money",
    metaDesc: `Play the Vegas Casino online game at Indiluck! Enjoy thrilling casino action and win real
    money with the best Vegas casino experience.`,
  },
];

// Function to get trophy color based on rank
const getTrophyColor = (rank) => {
  switch (rank) {
    case 1:
      return "#FFD700"; // Gold for 1st place
    case 2:
      return "#C0C0C0"; // Silver for 2nd place
    case 3:
      return "#CD7F32"; // Bronze for 3rd place
    default:
      return "gray"; // Default color for other ranks
  }
};

// GameCard component for each card
const GameCard = ({ game }) => {
  const trophyColor = getTrophyColor(game.rank); // Get color based on rank
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${game.slug}`, { state: { game } }); // Navigate to the dynamic route
  };

  return (
    <Grid item xs={12} sm={4}>
      <Box
        onClick={handleCardClick}
        sx={{
          position: "relative", // For positioning the trophy icon
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {/* Trophy Icon with Rank */}
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            right: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: trophyColor,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: "30px", color: trophyColor }} />
          <Typography
            variant="subtitle2"
            sx={{
              position: "absolute",
              top: "4px",
              right: "10px",
              fontWeight: "bold",
              color: "white",
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
          sx={{
            width: "100%",
            maxHeight: "100px",
            objectFit: "contain",
            marginBottom: "8px",
          }}
        />

        {/* Game Title */}
        <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
          {game.title}
        </Typography>

        {/* Game Grade */}
        <Typography variant="body2" sx={{ color: "gray", marginBottom: "8px" }}>
          {game.grade}
        </Typography>

        {/* Download Button */}
        <Link href={game.downloadLink} target="_blank" underline="none">
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            sx={{
              textTransform: "none",
              backgroundColor: "#007bff",
              "&:hover": {
                backgroundColor: "#0056b3",
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
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </Box>
  );
};

export default GameListing1;
