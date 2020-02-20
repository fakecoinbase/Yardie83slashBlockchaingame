import React from "react";
import { GoLink } from "react-icons/go";

import Logo from "../../../assets/img/logo192.png";

const Brand = (
  <div style={{ display: "flex", justifyContent: "center", padding: "0px" }}>
    <div style={{ paddingTop: "15px", paddingRight: "20px" }}>
      <img alt="" src={Logo} width={40} height={40} />
    </div>
    <h1>
      {" "}
      Bloxx <GoLink /> Game{" "}
    </h1>
  </div>
);

export default Brand;
