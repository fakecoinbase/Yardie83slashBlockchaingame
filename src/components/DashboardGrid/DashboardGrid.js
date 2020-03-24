import React from "react";
import { Provider } from "rendition";
import AdminGrid from "./AdminGrid/AdminGrid";
import UserGrid from "./UserGrid/UserGrid";


const DashboardGrid = (props) => {


  return (
    <Provider>
      {props.admin ? <AdminGrid {...props} /> : <UserGrid {...props} />}
    </Provider>
  );
};

export default DashboardGrid;
