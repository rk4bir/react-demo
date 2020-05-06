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
  apiKey: ('AIzaSyDTU5hGkT0cXE92wrTXHfBi-T0dhC09qM4')
})(MapContainer)

// export class MapContainer extends Component {
// 	// API Key: AIzaSyDTU5hGkT0cXE92wrTXHfBi-T0dhC09qM4
//   constructor(props) {
//     super(props);

//     this.state = {
//       stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
//               {latitude: 47.359423, longitude: -122.021071},
//               {latitude: 47.2052192687988, longitude: -121.988426208496},
//               {latitude: 47.6307081, longitude: -122.1434325},
//               {latitude: 47.3084488, longitude: -122.2140121},
//               {latitude: 47.5524695, longitude: -122.0425407}]
//     }
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return <Marker key={index} id={index} position={{
//        lat: store.latitude,
//        lng: store.longitude
//      }}
//      onClick={() => console.log("You clicked me!")} />
//     })
//   }

//   render() {
//     return (
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         >
//           {this.displayMarkers()}
//         </Map>
//     );
//   }
// }