import React from "react";
import Tile from '../../components/tiles/Tile';

//stylesheet
import Grid from '@material-ui/core/Grid';


//test assets
import img from '../../assets/img/etc/I1.jpg';
import img0 from '../../assets/img/etc/I2.jpg';
import img1 from '../../assets/img/etc/I3.jpg';
import img2 from '../../assets/img/etc/I4.jpg';

import img3 from '../../assets/img/etc/reptile.jpg';
var img5 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif'


class Tiles extends React.Component{
    render() {
        return (
            <div>
                <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" alignItems="bottom">
                    <Tile id="01" img={img} title="Tile 1" description="This is a test of discription on tile 1."/>
                    <Tile id="02" img={img0} title="Tile 2" description="This is a test of description on tile 2."/>
                    <Tile id="03" img={img1} title="Tile 3" description="This is a test of description on tile 3."/>
                    <Tile id="04" img={img2} title="Tile 4" description="This is a test of description on tile 4."/>
                    <Tile id="04" img={img3} title="Tile 5" description="This is an example of paragraph text. This is an example of paragraph text. This is an example of paragraph text. This is an example of paragraph text. This is an example of paragraph text. This is an example of paragraph text. "/>
                </Grid>
            </div>
        );
    }
}

export default Tiles;
