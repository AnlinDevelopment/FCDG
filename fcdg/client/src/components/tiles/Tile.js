import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//stylesheet
import "./Tile.css";

import Mymodal from "../modal/Mymodal";

function clicked(name) {
  alert(`You clicked ${name}!`);
}

export default function Tile(props) {
  return (
    <Card
      className="card"
      onClick={() =>
        clicked(`${props.title} || ${props.description} || ${props.img} `)
      }
    >
      <CardActionArea>
        <CardMedia component="img" height="150" image={props.img} />
        <CardContent>
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography
            className="description"
            variant="body2"
            color="text.secondary"
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
