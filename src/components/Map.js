import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  render() {
    const mapStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    };
    const mapContainerStyle = {
      position: 'absolute',  
      width: '100%',
      height: '100%'
    };

    return (
      <Map 
        google={this.props.google} 
        defaultZoom={14}
        style={mapStyle}
        containerStyle={mapContainerStyle}
        defaultCenter={this.props.center}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} 
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>just another title</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const LoadingContainer = (props) => (
  <div style={{textAlign: 'center', paddingTop: '10px'}}>Loading...</div>
)

export default GoogleApiWrapper({
  apiKey: (''),
  LoadingContainer: LoadingContainer,
})(MapContainer)
