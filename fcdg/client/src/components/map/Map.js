import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../map/mapStyles";
import CardForm from "../submit/CardForm";

// map window size
const containerStyle = {
  width: "100VW",
  height: "50VH",
};

// default map location and zoom
const center = {
  lat: 36.779634,
  lng: -119.786404,
  zoom: 11,
};

// additional map options also see mapStyles.js
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map(props) {
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");

  return (
    //This is my personal API key; this will need to be changed in the future. -Darien Stefani
    <LoadScript googleMapsApiKey="AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={center.zoom}
        options={options}
        onClick={(props) => {
          //sets cordinates into variables everytime the map is clicked
          var lat = props.latLng.lat();
          var lon = props.latLng.lng();

          const cordinates = {
            lat: props.latLng.lng(),
            lon: props.latLng.lng(),
          };

          //console logs marker cordinates
          console.log("latitude = ", props.latLng.lat());
          console.log("longitude = ", props.latLng.lng());

          setMarkers((current) => [
            {
              lat: props.latLng.lat(),
              lng: props.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
      {/* <CardForm {...props} /> */}
    </LoadScript>
  );
}
