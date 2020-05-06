import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Search from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import ImgMediaCard from './includes/Card.js';
import ItemCarouselSlider from './Slider.js';
import LineItem from './includes/LineItem.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '15px'
  },
  header: {
  	fontSize: '20px',
  	fontWeight: 'bold',
  },
  link: {
  	textAlign: 'right',
  	fontSize: '12px',
  	fontWeight: 'normal',
  },
  linkBox: {
  	textAlign: 'right',
  	marginBottom: '10px'
  }
}));


const experiencItems = [
	{
		'src': require("../images/cards/night-life.jpg"),
		'imageTitle': 'NIGHTLIFE - NEW YORK',
  		'longTitle': "Discover the city's party scene",
  		'amount': 35,
  		'rating': 5,
  		'review': 64,
	},
	{
		'src': require("../images/cards/entertainment.jpg"),
		'imageTitle': 'ENTERTAINMENT - VANCOUVER',
  		'longTitle': "Tour with an Enthusiastic local!",
  		'amount': 3,
  		'rating': 5,
  		'review': 1,
	},
	{
		'src': require("../images/cards/photo-class.jpg"),
		'imageTitle': 'PHOTO CLASS - LOS ANGELES',
  		'longTitle': "Must Have L.A. Pictures!",
  		'amount': 39,
  		'rating': 5,
  		'review': 179,
	},
	{
		'src': require("../images/cards/photography.jpg"),
		'imageTitle': 'PHOTOGRAPHY - NEW YORK',
  		'longTitle': "Retro photoshot in NYC",
  		'amount': 49,
  		'rating': 5,
  		'review': 72,
	},
]

export default function LandingPage() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-08T21:11:59'));

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper} style={{textAlign: 'left'}}>
            <Typography gutterBottom variant="p" component="p" style={{fontSize: '14px', fontWeight: 'bold', background: 'transparent'}}>
              LOCATION
            </Typography>
            <FormControl fullWidth variant="filled" style={{border: 'none'}}>
              <InputBase
                className={classes.input}
                placeholder="Add city, landmark or address"
                inputProps={{ 'aria-label': 'Add city, landmark or address' }}
                style={{fontSize: '12px'}}
              />
            </FormControl>
          </Paper>

          <Grid container spacing={1}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={6} xs={6}>
                  <Paper className={classes.paper} style={{textAlign: 'left'}}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Arival"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'Arival Date',
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Paper className={classes.paper} style={{textAlign: 'left'}}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Departure"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'Departure Date',
                      }}
                    />
                  </Paper>
                </Grid>
              </MuiPickersUtilsProvider>
          </Grid>

          <Paper className={classes.paper} style={{textAlign: 'left', marginBottom: '1px', padding: '0'}}>
            <ListItem button onClick={handleClick}>
              <Typography gutterBottom variant="p" component="p" style={{color: '#a3a29e', fontSize: '12px',  background: 'transparent'}}>
                Guests
              </Typography>
              <ListItemText primary="" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                <Typography gutterBottom variant="p" component="p" style={{color: '#000000', fontSize: '15px', fontWeight: 'bold', background: 'transparent'}}>
                  2 ADULTS, 1 CHILD
                </Typography>
                </ListItem>
              </List>
            </Collapse>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: '0', padding: '0'}}>
            <LineItem title='ADULTS' subtitle='' />
            <LineItem title='CHILD' subtitle='Age: 2-12' />
            <LineItem title='BABIES' subtitle='Younger than 2' />
            <Grid item style={{padding: '10px', textAlign: 'right'}}>
              <Button 
                variant='outlined' 
                size='small'
                style={{
                color: "#8bc34a",
                borderColor: '#8bc34a'
              }}
              >
                Apply
              </Button>
            </Grid>
          </Paper>

          <Button 
            style={{
              marginTop: '15px', 
              textTransform: "none", 
              paddingTop: '10px', 
              paddingBottom: '10px',
              color: "#ffffff",
              backgroundColor: '#8bc34a'
            }}
            variant='contained'
            color='primary'
            elevation={0}
            fullWidth
          >
            <Search fontSize='small'/> Search
          </Button>
                    
        </Grid>

        <Grid item md={8} xs={12}>
        
        	{/* title: experiences */}
        	<Typography gutterBottom variant="body" component="body" className={classes.header}>
		          Experiences
		      </Typography>

		      <Box className={classes.linkBox}>
		    	  <Link href="#" underline='none' color="inherit" className={classes.link}>
				      See all<ChevronRight fontSize='small' />
				    </Link>
			    </Box>
          <Grid container spacing={1}>
            	{experiencItems.map((experiencItem) => (
    	        <Grid item md={3} xs={6}>
    	          	<ImgMediaCard 
    	          		src={experiencItem.src} 
    	          		imageTitle={experiencItem.imageTitle}
    	          		longTitle={experiencItem.longTitle}
    	          		amount={experiencItem.amount}
    	          		rating={experiencItem.rating}
    	          		review={experiencItem.review}
    	          	/>
    	        </Grid>
            	))}
          </Grid>

          {/* title: home */}
          <Typography gutterBottom variant="body" component="body" className={classes.header}>
                Homes
          </Typography>

    	    <Box className={classes.linkBox}>
    	    	<Link href="#" underline='none' color="inherit" className={classes.link}>
    			    See all<ChevronRight fontSize='small' />
    			 </Link>
    			</Box>

	        <ItemCarouselSlider />
        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>just another title</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('')
})(MapContainer)

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}