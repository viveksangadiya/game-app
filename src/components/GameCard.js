import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';  // If you're using makeStyles

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const GameCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://via.placeholder.com/345x140.png"
        title="JJ Rummy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          JJ Rummy
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          1m+ | Win ₹60
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Min. Withdrawal ₹100/-
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Download
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;