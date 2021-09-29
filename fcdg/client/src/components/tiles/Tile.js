import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Mymodal from "../modal/Modal";

//stylesheet
import "./Tile.css";

export default function Tile(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const popup = (props) => setModalShow(true);
  return (
    <>
      <Mymodal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.title}
        img={props.img}
        description={props.description}
      />
      <Card
        className="card"
        onClick={() =>
          popup(`${props.title} || ${props.description} || ${props.img} `)
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
    </>
  );
}
