import React, { useState, useEffect } from "react";
import { Heading, Divider } from "rendition";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput/LabeledInput";
import useUserInfo, { UserType } from "../../customHooks/useUserInfo/useUserInfo";
import { useInsertTransactionMutation, useAddressSubscription } from "../../generated/graphql";
import useDataToSign from "../../customHooks/useDataToSign";
import useDataToHash from "../../customHooks/useDataToHash";

const Wallet = () => {
  const [userInfo, setUserInfo]: [UserType, React.Dispatch<React.SetStateAction<UserType>>] = useUserInfo();
  const { data } = useAddressSubscription();
  const [canBroadcast, setCanBroadcast] = useState(false);
  const [fields, setFields] = useState({ to: "", amount: "", signature: "", txHash: "" });
  const [insertTransactionMutation] = useInsertTransactionMutation();
  const [, setDataToSign]: [string, React.Dispatch<React.SetStateAction<string>>] = useDataToSign();
  const [, setDataToHash]: [string, React.Dispatch<React.SetStateAction<string>>] = useDataToHash();

  useEffect(() => {
    let currentUser = undefined;
    if (data) {
      currentUser = data!.bloxx_address.find(address => address.id === userInfo.address.id);
    }
    if (currentUser) {
      const amount = currentUser!.balance!;
      setUserInfo({ ...userInfo, address: { id: userInfo.address.id, amount } });
    }
  }, [data]);

  const copyToSign = () => {
    if (fields !== undefined)
      setDataToSign(userInfo.address.id.concat(":".concat(fields.to.concat(":".concat(fields.amount)))));
  };

  const copyToHasher = () => {
    if (fields !== undefined)
      setDataToHash(fields.to.concat(":".concat(fields.amount.concat(":".concat(fields.signature)))));
  };

  const onChange = (key: string, value: string) => {
    setFields({ ...fields, [key]: value });
  };

  useEffect(() => {
    const errors = validate(fields.to, parseInt(fields.amount), fields.signature, fields.txHash);
    const isDisabled = Object.keys(errors).some((value, index, array) => errors[index]);
    setCanBroadcast(!isDisabled);
  }, [fields]);

  const onBroadcast = () => {
    insertTransactionMutation({
      variables: {
        inputAddress: userInfo.address.id,
        outputAddress: fields.to,
        value: parseInt(fields.amount),
        signature: fields.signature,
        txHash: fields.txHash
      }
    }).catch(error => {
      console.log(error);
    });
  };

  //TODO Improve validation to check for right input format.
  // If any of the returned values is true, then we can not broadcast
  const validate = (to: string, amount: number, signature: string, txHash: string) => {
    return [to.length === 0, isNaN(amount), signature.length === 0, txHash.length === 0];
  };

  const subTitle = (
    <div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
      <span style={{ display: "inline-block", boxSizing: "border-box", width: "50%" }}>
        Balance: {userInfo.address.amount ? userInfo.address.amount : 0}
      </span>
    </div>
  );

  return (
    <>
      <Title title="Wallet" subTitle={subTitle}></Title>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        <Heading.h6 style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C", paddingBottom: "5px" }}>
          Send Coins
        </Heading.h6>
        <Divider />
        <LabeledInput placeholder={"To Address"} onChange={e => onChange("to", e.target.value)} />
        <LabeledInput placeholder={"Amount"} onChange={e => onChange("amount", e.target.value)} />
        <div style={{ paddingBottom: "20px" }}>
          {/* <div style={{ float: "right", right: "0px", paddingRight: "10px" }}> */}
            <Button onClick={copyToSign} variant="contained" color="primary" size="small">
              Copy to Sign
            </Button>
          {/* </div> */}
        </div>
        <div style={{ clear: "both", height: "10px" }} />
        <LabeledInput
          placeholder={"Signature"}
          onChange={e => onChange("signature", e.target.value)}
        />
        <div style={{ paddingBottom: "20px" }}>
          {/* <div style={{ float: "right", right: "0px", paddingRight: "10px" }}> */}
            <Button onClick={copyToHasher} variant="contained" color="primary" size="small">
              Copy to Hasher
            </Button>
          {/* </div> */}
        </div>
        <div style={{ clear: "both", height: "10px" }} />
        <LabeledInput
          placeholder={"Transaction Hash"}
          onChange={e => onChange("txHash", e.target.value)}
        />
        {/* <div style={{ float: "right", paddingBottom: "10px" }}> */}
          {/* <div style={{ float: "right", paddingRight: "10px" }}> */}
            <Button onClick={onBroadcast} variant="contained" color="primary" disabled={!canBroadcast} size="small">
              Broadcast
            </Button>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Wallet;
