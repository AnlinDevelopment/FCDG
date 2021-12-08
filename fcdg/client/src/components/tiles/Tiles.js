// import React from "react";
import React, { useState, useEffect } from "react";
import Tile from "../../components/tiles/Tile";
import Axios from "axios";

//stylesheet
import Grid from "@material-ui/core/Grid";

const Tiles = () => {
  const [DBcards, setDBcards] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/cards").then((response) => {
      // console.log("Front End Card Data: ", response.data);
      setDBcards(response.data);
    });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {DBcards.slice(0)
          .reverse()
          .map((props) => (
            <Tile
              key={props.id}
              img={props.photo}
              title={props.title}
              description={props.description}
              lat={props.latitude}
              lon={props.longitude}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Tiles;
