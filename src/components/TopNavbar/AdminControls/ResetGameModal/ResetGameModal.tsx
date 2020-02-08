import React, { useState } from "react";
import { Modal, Provider, Box, Txt, Alert, Flex, Button, Card, List } from "rendition";
import useResetGameModal from "../../../../customHooks/useResetGameModal/useResetGameModal";
import { useDeleteGameDataMutation, useInsertNodeMutation } from "../../../../generated/graphql";
import useAdminInfo from "../../../../customHooks/useAdminInfo/useAdminInfo";
import generateNode from "../../../../services/nodeGen";
import LoadingIndicator from "../../../util/LoadingIndicator/LoadingIndicator";

const ResetGameModal = () => {
  const [, setShowResetGameModal] = useResetGameModal();
  const [deleteGameData, { data, loading: loadingDeletion }] = useDeleteGameDataMutation({});
  const [showDeletionResult, setShowDeletionResult] = useState(false);
  const [, setAdminInfo] = useAdminInfo();

  const [insertNodeMutation, { loading: loadingNewNode }] = useInsertNodeMutation();

  const generateNewAdminNode = () => {
    const info = generateNode();
    insertNodeMutation({
      variables: { publicKey: info.publicKey, privateKey: info.privateKey, address: info.address }
    })
      .then(res => {
        return {
          privateKey: res!.data!.insert_bloxx_node!.returning[0].privateKey,
          publicKey: res!.data!.insert_bloxx_node!.returning[0].publicKey,
          address: {
            id: res!.data!.insert_bloxx_node!.returning[0].addresses[0].id,
            amount: res!.data!.insert_bloxx_node!.returning[0].addresses[0].balance
          }
        };
      })
      .then(res => {
        setAdminInfo(res);
      });
  };

  const deleteData = () => {
    deleteGameData().then(() => {
      generateNewAdminNode();
      setShowDeletionResult(true);
    });
  };

  return (
    <Provider>
      <Modal
        title={"Reset Game"}
        action={"Close"}
        done={() => {
          setShowResetGameModal(false);
        }}
      >
        {loadingDeletion || loadingNewNode ? (
          <LoadingIndicator />
        ) : (
          <Card>
            {showDeletionResult && data ? (
              <List>
                <Txt>{data.delete_bloxx_node!.affected_rows} Nodes deleted</Txt>
                <Txt>{data.delete_bloxx_address!.affected_rows} Addresses deleted</Txt>
                <Txt>{data.delete_bloxx_block!.affected_rows} Blocks deleted</Txt>
                <Txt>{data.delete_bloxx_transaction!.affected_rows} Transactions deleted</Txt>
              </List>
            ) : (
              <Box m={3}>
                <Flex justifyContent={"center"} alignItems={"flex-end"}>
                  <Box pr={5}>
                    <Alert emphasized danger>
                      <Txt>You are about to delete all the game data</Txt>
                    </Alert>
                  </Box>
                  <Box>
                    <Button danger onClick={deleteData}>
                      Delete Data
                    </Button>
                  </Box>
                </Flex>
              </Box>
            )}
          </Card>
        )}
      </Modal>
    </Provider>
  );
};

export default ResetGameModal;
