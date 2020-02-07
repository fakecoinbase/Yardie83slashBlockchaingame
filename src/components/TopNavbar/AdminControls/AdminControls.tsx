import React from "react";
import { Navbar } from "rendition";
import Brand from "../Brand";
import { Button } from "@material-ui/core";
import useAdminModal from "../../../customHooks/useAdminModal/useAdminModal";
import useResetGameModal from "../../../customHooks/useResetGameModal/useResetGameModal";

const AdminControls = () => {
  const [, setShowAdminModal] = useAdminModal();
  const [,setShowResetGameModal] = useResetGameModal();

  const onClick = () => {
    setShowAdminModal(true);
  };

  return (
    <Navbar brand={Brand} style={{ background: "#282828", height: "70px" }}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={onClick}
        style={{ marginRight: "10px" }}
      >
        Transfer Coins
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => setShowResetGameModal(true)}
        style={{ marginRight: "10px" }}
      >
        Reset Game
      </Button>
    </Navbar>
  );
};

export default AdminControls;
