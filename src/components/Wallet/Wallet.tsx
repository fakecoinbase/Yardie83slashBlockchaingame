import React, { useState, useEffect } from "react";
import {} from "./WalletStyles.js";
import { Heading, Divider } from "rendition";
import { Button } from "@material-ui/core";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput/LabeledInput";
import useUserInfo from "../../customHooks/useUserInfo/useUserInfo";

const Wallet = () => {
  const [userInfo, setUserInfo] = useUserInfo();
  const [canBroadcast, setCanBroadcast] = useState(false);
  const [fields, setFields] = useState({ to: "", amount: "", signature: "", txHash: "" });

  const copyTosign = () => {};
  const copyToHasher = () => {};

  const onChange = (key: string, value: string) => {
    setFields({ ...fields, [key]: value });
  };

  useEffect(() => {
    const errors = validate(fields.to, parseInt(fields.amount), fields.signature, fields.txHash);
    const isDisabled = Object.keys(errors).some((value, index, array) => errors[index]);
    setCanBroadcast(!isDisabled);
  }, [fields]);

  const onBroadcast = () => {};

  //TODO Improve validation to check for write format of input
  const validate = (to: string, amount: number, signature: string, txHash: string) => {
    console.log("[Amount]", amount);
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
          My Address: {userInfo.address.id ? userInfo.address.id : ""}
        </Heading.h6>
        <Divider />
        <Heading.h6 style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C", paddingBottom: "5px" }}>
          Send Coins
        </Heading.h6>
        <LabeledInput label={"To"} placeholder={"Address"} onChange={e => onChange("to", e.target.value)} />
        <LabeledInput label={"Amount"} placeholder={"Amount"} onChange={e => onChange("amount", e.target.value)} />
        <div style={{ paddingBottom: "20px" }}>
          <div style={{ float: "right", right: "0px", paddingRight: "10px" }}>
            <Button onClick={copyTosign} variant="contained" color="primary" size="small">
              Copy to Sign
            </Button>
          </div>
        </div>
        <div style={{ clear: "both", height: "10px" }} />
        <LabeledInput
          label={"Signature"}
          placeholder={"Signature"}
          onChange={e => onChange("signature", e.target.value)}
        />
        <div style={{ paddingBottom: "20px" }}>
          <div style={{ float: "right", right: "0px", paddingRight: "10px" }}>
            <Button onClick={copyToHasher} variant="contained" color="primary" size="small">
              Copy to Hasher
            </Button>
          </div>
        </div>
        <div style={{ clear: "both", height: "10px" }} />
        <LabeledInput
          label={"Tx Hash"}
          placeholder={"Transaction Hash"}
          onChange={e => onChange("txHash", e.target.value)}
        />
        <div style={{ float: "right", paddingBottom: "10px" }}>
          <div style={{ float: "right", paddingRight: "10px" }}>
            <Button onClick={onBroadcast} variant="contained" color="primary" disabled={!canBroadcast} size="small">
              Broadcast
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
