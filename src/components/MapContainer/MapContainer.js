import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { WEDDING_BLOG_MAPS_API_KEY } from "../../config/local.env.js";

const mapStyles = {
  position: "absolute",
  height: "100%",
  width: "100%",
  left: "0",
  top: "0",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -20.308539,
          lng: -43.985092,
        }}
      >
        <Marker
          name={"Sítio Topo da Serra"}
          position={{ lat: -20.308539, lng: -43.985092 }}
        />
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: WEDDING_BLOG_MAPS_API_KEY,
})(MapContainer);
