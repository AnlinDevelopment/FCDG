// import React from "react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Tile from "../../components/tiles/Tile";
import Test from "../test/Test";

import Fetch from "../test/Test";

//stylesheet
import Grid from "@material-ui/core/Grid";

//test assets
import img from "../../assets/img/etc/I1.jpg";
import img0 from "../../assets/img/etc/I2.jpg";
import img1 from "../../assets/img/etc/I3.jpg";
import img2 from "../../assets/img/etc/I4.jpg";

import img3 from "../../assets/img/etc/reptile.jpg";
var img5 = "https://i.kym-cdn.com/photos/images/newsfeed/000/804/850/999.gif";

const Tiles = (props) => {
  const [DBcards, setDBcards] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/cards").then((response) => {
      // console.log("Front End Card Data: ", response.data);
      setDBcards(response.data);
    });
  });

  //spoonfed array
  // const db = [
  //   { title: "Title 1", description: "Desc 1", img: "" },
  //   { title: "Title 2", description: "Desc 2", img: "" },
  //   { title: "Title 3", description: "Desc 3", img: "" },
  // ];

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
