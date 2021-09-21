import React from "react";
import Tile from '../../components/tiles/Tile';

//stylesheet
import Grid from '@material-ui/core/Grid';


//test assets
import img from '../../assets/img/etc/I1.jpg';

import img1 from '../../assets/img/etc/reptile.jpg';
var img0 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif'


class Tiles extends React.Component{
    render() {
        return (
            <div>
                <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" alignItems="bottom">
                    <Tile id="01" title="Tile 1 Test" description="This is a test of discription on tile 1." img={img}/>
                    <Tile id="02" title="Tile 2 Test" description="This is a test of description on tile 2." img={img0}/>
                    <Tile id="03" title="Tile 3 Test" description="This is a test of description on tile 3." img={img1}/>
                    <Tile id="04" title="Tile 4 Test" description="This is a test of description on tile 4." img={img}/>
                    <Tile id="04" title="Tile 4 Test" description="This is a test of description on tile 4.This is a test of description on tile 4.This is a test of description on tile 4.This is a test of description on tile 4.This is a test of description on tile 4.This is a test of description on tile 4.This is a test of description on tile 4." img={img}/>
                </Grid>
            </div>
        );
    }
}

export default Tiles;
