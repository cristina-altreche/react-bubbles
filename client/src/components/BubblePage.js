import React, { useState, useEffect } from "react";
//RENAMED axiosWithAuth to api
import api from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    localStorage.getItem("token") &&
      api()
        .get("api/colors")
        .then((response) => {
          setColorList(response.data);
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
