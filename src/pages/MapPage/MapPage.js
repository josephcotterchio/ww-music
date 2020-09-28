import React, { Component } from "react";
import "./App.css";
import Map from "../../components/Map/Map";
import { getCurrentLatLng } from "../../utils/geolocation";
import { getCurLocationByLatLng } from "../../utils/map-api";

class App extends Component {
  state = {
    lat: null,
    lng: null,
    location: null,
  };

  async componentDidMount() {
    // Destructure the object returned from getCurrentLatLng()
    const { lat, lng } = await getCurrentLatLng();
    const locationData = await getCurLocationByLatLng(lat, lng);
    this.setState({
      lat,
      lng,
      temp: Math.round(locationData.main.temp),
      icon: locationData.location[0].icon,
    });
  }

  render() {
    return (
      <div className="App">
        <Map lat={this.state.lat} lng={this.state.lng} />
        <header className="App-header">
          <div>{this.state.temp}&deg;</div>
          WEED & WINE MAP
          {this.state.icon && (
            <img
              src={`https://maps.googleapis.com/maps/api/js/img/w/${this.state.icon}.png`}
              alt="Current Conditions"
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
