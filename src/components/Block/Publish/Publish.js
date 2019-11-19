import React, { useState, useEffect } from "react";
import {} from "./PublishStyles.js";
import { Button } from "@material-ui/core";
import Title from "../../util/Title/Title";

const Publish = () => {
  // const [hook, setHook] = useState(hook);

  return (
    <>
      <Title subTitle="Publish Block" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
          paddingTop: "10px"
        }}
      >
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </div>
    </>
  );
};

export default Publish;
