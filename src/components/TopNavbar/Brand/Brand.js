import React from "react";
import { GoLink } from "react-icons/go";

import Logo from "../../../assets/img/blockchainsymbol.svg";

const Brand = (
  <div style={{ display: "flex", padding: "0px" }}>
    <div style={{ paddingRight: "20px" }}>
      <img alt="" src={Logo} width={60} height={60}  />
    </div>
    <h1>
      {" "}
      Bloxx <GoLink /> Game{" "}
    </h1>
  </div>
);

export default Brand;
