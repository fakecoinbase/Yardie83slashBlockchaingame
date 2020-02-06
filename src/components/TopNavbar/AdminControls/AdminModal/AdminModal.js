import React, { useEffect, useState } from "react";
import { Modal, Provider, Box, Table, Flex, Txt, Input } from "rendition";
import { Button } from "@material-ui/core";
import useAdminModal from "../../../../customHooks/useAdminModal/useAdminModal";
import { useOnNewNodeAddedSubscription } from "../../../../generated/graphql";
import Loader from 'react-loader-spinner'

const AdminModal = () => {
  const [, setShowAdminModal] = useAdminModal();
  const [nodes, setNodes] = useState([]);
  const [selectedNodes, setSelectedNodes] = useState([]);

  const { data, loading } = useOnNewNodeAddedSubscription();

  useEffect(() => {
    if (data) {
      let _nodes = [];

      data.bloxx_node.forEach(node => {
        if (node.publicKey !== "undefined" && typeof node.addresses[0] !== "undefined") {
          _nodes.push({
            address: node.addresses[0].id,
            balance: node.addresses[0].balance
          });
        }
      });
      setNodes(_nodes);
    }
  }, [data]);

  const columns = [
    {
      field: "address",
      label: "Node Address"
    },
    {
      field: "balance",
      label: "Amount",
      sortable: true
    }
  ];

  return (
    <Modal
      title={"Transfer coins"}
      done={() => {
        setShowAdminModal(false);
      }}
    >
      {/* Div with slected nodes, amount field and send button */}

      {/* list of nodes with select buttons */}
      <Provider>
        <Box m={3}>
          {loading && <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
          />}
          {data !== undefined && (
            <>
              <Flex m={3} alignItems={"center"}>
                <Box pr={3}>
                  <Txt>Send:</Txt>
                </Box>
                <Box pr={3}>
                  <Input width={100} type={"number"}></Input>
                </Box>
                <Box pr={3}>
                  <Txt>coins to</Txt>
                </Box>
                <Box pr={3}>
                  <Txt bold>{selectedNodes.length}</Txt>
                </Box>
                <Box pr={3}>
                  <Txt >nodes</Txt>
                </Box>
                <Box pr={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => { }}
                    style={{ marginRight: "10px" }}
                  >Send Coins</Button>
                </Box>
              </Flex>
              <Table
                columns={columns}
                data={nodes}
                // use TxHash for rowKey; because it is unique
                rowKey="address"
                onCheck={selectedNodes => setSelectedNodes(selectedNodes)}

              />
            </>
          )}
        </Box>
      </Provider>
    </Modal>
  );
};

export default AdminModal;
