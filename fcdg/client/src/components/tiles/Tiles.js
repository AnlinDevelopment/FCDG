// import React from "react";
import React, { useState, useEffect } from "react";
import Tile from "../../components/tiles/Tile";
import Axios from "axios";

//stylesheet
import Grid from "@material-ui/core/Grid";

const Tiles = (props) => {
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
        {DBcards.map((item) => (
          <Tile
            key={item.id}
            img={item.photo}
            title={item.title}
            description={item.description}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Tiles;
