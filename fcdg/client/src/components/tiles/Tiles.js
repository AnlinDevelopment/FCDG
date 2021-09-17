import React from "react";
import Tile from '../../components/tiles/Tile';
import Container from '@material-ui/core/Container';

import Img from '../../assets/img/etc/reptile.jpg';
import { Row } from "react-bootstrap";
// import Img from '../../assets/img/etc/I1.jpg';

// var Img = 'https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif'


export default function MediaCard() {
    
    return (
<Container  style={{ display:"flex", padding:15 }}>
<Tile/>
<Tile/>
<Tile/>
</Container>    
    );
}
