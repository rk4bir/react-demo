import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Star from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    marginBottom: '5px',
    padding: '2px'
  },
  longTitle: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  description: {
    paddingTop: '10px', 
    fontSize: '12px',
    color: 'textSecondary'
  },
  facility: {
    paddingTop: '5px', 
    fontSize: '13px',
  },
  other: {
    marginTop: '20px', 
    fontSize: '13px',
  },

  
  amount: {
    fontSize: '10px',
  },
  rating: {
    display: 'flex',
    paddingTop: '20px',
    fontSize: '13px',
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root} elevation={0}>
      <Grid container spacing={1}>
        <Grid item md={6} >
          <CardMedia
            component="img"
            alt={props.imageTitle}
            height="200"
            image={props.src}
            style={{borderRadius: '20px'}}
          />
        </Grid>

        <Grid item md={6} >
          <CardContent className={classes.title}>
            <Typography variant="body1" component="p" className={classes.longTitle}>
              {props.longTitle}
            </Typography>
            <Typography  color="textSecondary" component="p" className={classes.description}>
                {props.description}
            </Typography>
            
            <Typography  color="textSecondary" component="p" className={classes.facility}>
              {props.facility}
            </Typography>

            <Typography  color="textSecondary" component="p" className={classes.other}>
              {props.other}
            </Typography>
            
            
            <ListItem style={{padding: '0px'}}>
              <Box className={classes.rating}>
                <Star fontSize='small' color='primary' /> {props.rating} ({props.review})
              </Box>
              <ListItemText style={{marginLeft: '50px', fontSize: '12px'}} 
                primary={
                  <Typography component="p" className={classes.other}>
                  ${props.amount}/night
                  </Typography>
                }
                secondary="$190 total"
              />
            </ListItem>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
