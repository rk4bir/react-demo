import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomRating from './Rating.js';
import 'typeface-roboto';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    marginBottom: '10px',
    padding: '2px'
  },
  cardcontent: {
    padding: '0px',
  },
  imgtitle: {
    paddingTop: '10px', 
    fontSize: '10px',
    fontWeight: 'bold'
  },
  longTitle: {
    paddingTop: '10px', 
    fontSize: '16px',
    fontWeight: 'bold'
  },
  amount: {
    fontSize: '10px',
  },
  rating: {
    paddingTop: '10px',
    fontSize: '10px',
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt={props.imageTitle}
        height="140"
        image={props.src}
      />
      <CardContent className={classes.cardcontent}>
        <Typography variant="body1" component="p" className={classes.imgtitle}>
            {props.imageTitle}
        </Typography>
        
        <Typography variant="body1" component="p" className={classes.longTitle}>
          {props.longTitle}
        </Typography>
        
        <Typography variant="body1" color="textSecondary" component="p" className='amount'>
          ${props.amount} per person
        </Typography>
        
        <Typography variant="body1" color="textSecondary" component="p" className='rating'>
          <CustomRating value={props.rating} review={props.review} />
        </Typography>
      </CardContent>
    </Card>
  );
}
