import React from "react";
import { Modal, Provider, Box, Txt, Alert } from "rendition";
import useResetGameModal from "../../../../customHooks/useResetGameModal/useResetGameModal";

const ResetGameModal = () => {
  const [, setShowResetGameModal] = useResetGameModal();

  return (
    <Provider>
      <Modal
        title={"Reset Game"}
        action={"Delete Data"}
        done={() => {
          
          setShowResetGameModal(false);
        }}

        cancel={() => {
          setShowResetGameModal(false);
        }}
      >
        <Box m={3}>
          <Alert emphasized danger prefix={false}>Caution!!
          <Txt>Are you sure you want to reset the game?</Txt>
            <Txt>This will delete all the game data and create a new admin node</Txt>
          </Alert>
        </Box>
      </Modal>
    </Provider>
  );
};

export default ResetGameModal;
