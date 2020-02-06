import React from "react";
import Button from "@material-ui/core/Button";

const onClick = () => {}

const Confirm = () => (
  <div style={{ float: "right", flexDirection: "row", flex: 1, paddingTop: "10px", paddingBottom: "10px" }}>
    <Button variant="contained" color="primary" size="small" onClick={() => onClick()} style={{ marginRight: "10px" }}>
      Confirm Block
    </Button>
  </div>
);

export default Confirm;
