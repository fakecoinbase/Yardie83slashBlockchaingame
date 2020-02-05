import React from "react";
import TopNavbar from "../../TopNavbar/TopNavbar";
import DashboardGrid from "../../DashboardGrid/DashboardGrid";
import { userLayouts } from "../../DashboardGrid/gridLayout";

const User = () => (
  <>
    <TopNavbar />
    <DashboardGrid layout={userLayouts} />
  </>
);

export default User;
