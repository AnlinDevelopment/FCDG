import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';

import Img from '../../assets/img/etc/reptile.jpg';
import Img0 from '../../assets/img/etc/I1.jpg';

var Img2 = 'https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
<Container>    
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia className={classes.media} image={Img} title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          share
        </Button>
        <Button size="small" color="primary">
          learn more
        </Button>
      </CardActions>
    </Card>
    </Container>    

  );
}
