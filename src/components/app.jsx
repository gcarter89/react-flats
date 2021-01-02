// TODO create components and implement into app.jsx
// flatList[], flat[], googlemap[] and marker[]

// Import React with the component class from react
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// Import components here
import FlatList from './flat_list';
import Marker from './marker';
// Import data here
import flats from '../../data/flats';


// Declare a class for the app with the constructor method and the state

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  // Declare a render method for the app, add map-container
  render() {
    console.log("app loaded");
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            center={this.center()}
            defaultZoom={14}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
