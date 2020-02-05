import React from "react";
import DashboardGrid from "../../DashboardGrid/DashboardGrid";
import { adminLayouts } from "../../DashboardGrid/gridLayout";
import TopNavbar from "../../TopNavbar/TopNavbar";

const Admin = () => {
  return (
    <>
      <TopNavbar admin />
      <DashboardGrid layout={adminLayouts} admin />
    </>
  );
};

export default Admin;
