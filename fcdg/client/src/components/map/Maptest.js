import {
  StaticGoogleMap,
  Marker,
  Path,
} from 'react-static-google-map';

function Maptest(){



}

<StaticGoogleMap size="600x600" className="img-fluid" apiKey="YOUR_API_KEY">
  <Marker location="6.4488387,3.5496361" color="blue" label="P" />
</StaticGoogleMap>



<StaticGoogleMap size="600x600" className="img-fluid" apiKey="AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE">
  <Marker location="6.4488387,3.5496361" color="blue" label="P" />
</StaticGoogleMap>

<StaticGoogleMap size="600x600" apiKey="AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE">
  <Marker.Group label="T" color="brown">
    <Marker location="40.737102,-73.990318" />
    <Marker location="40.749825,-73.987963" />
  </Marker.Group>
</StaticGoogleMap>

<StaticGoogleMap size="600x600" apiKey="AIzaSyCzRLyUMPIizb15X7SrckiLsbbNDWjhuKE">
  <Marker
    location={{ lat: 40.737102, lng: -73.990318 }}
    color="blue"
    label="P"
  />
  <Path
    points={[
      '40.737102,-73.990318',
      '40.749825,-73.987963',
      '40.752946,-73.987384',
      '40.755823,-73.986397',
    ]}
  />
</StaticGoogleMap>

export default Maptest