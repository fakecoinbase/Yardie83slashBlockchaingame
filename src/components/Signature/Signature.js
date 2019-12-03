import React, { useState, useEffect } from "react";
import { Input, Tabs, Tab } from "rendition";
import Button from "@material-ui/core/Button";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";
import { sign, check } from '../../services/signature';

const Signature = () => {

  const [signParams, setSignParams] = useState({ p1: "", p2: "", p3: "" })
  const [checkParams, setCheckParams] = useState({ p1: "", p2: "", p3: "" })
  const [signature, setSignature] = useState("");
  const [checkedSignature, setCheckedSignature] = useState("");
  const [signatureIsValid, setSignatureIsValid] = useState(undefined);

  const onChange = (value, id) => {
    if (id === "s1") setSignParams({ ...signParams, p1: value });
    if (id === "s2") setSignParams({ ...signParams, p2: value });
    if (id === "s3") setSignParams({ ...signParams, p3: value });
    if (id === "c1") setCheckParams({ ...checkParams, p1: value });
    if (id === "c2") setCheckParams({ ...checkParams, p2: value });
    if (id === "c3") setCheckParams({ ...checkParams, p3: value });
  }

  const signTX = () => {
    const { p1, p2, p3 } = signParams;
    const result = sign(p1, p2, p3);
    setSignature(result)
  }

  const checkTx = () => {
    const { p1, p2, p3 } = checkParams;
    const result = check(p1, p2, p3);
    setSignatureIsValid(result)
    const response = result ? "Signature is valid" : "Signature is invalid"
    setCheckedSignature(response)
  }

  useEffect(() => {
    if (checkParams.p1 === "" || checkParams.p2 === "" || checkParams.p3 === "") {
      setCheckedSignature("")
      setSignatureIsValid(undefined)
    }
  }, [checkParams])

  useEffect(() => {
    if (signParams.p1 === "" || signParams.p2 === "" || signParams.p3 === "") {
      setSignature("")
    }
  }, [signParams])


  return (
    <>
      <Title title="Signature" />
      <Tabs>
        <Tab title="Sign">
          <div
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px"
            }}
          >
            <LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} id={"s1"} onChange={onChange} value={signParams.p1} />
            <LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} id={"s2"} onChange={onChange} value={signParams.p2} />
            <LabeledInput label={"Parameter 3"} placeholder={"Parameter 3"} id={"s3"} onChange={onChange} value={signParams.p3} />
            <div style={{ float: "right" }}>
              <div style={{ float: "left", paddingRight: "10px" }}>
                <Button variant="contained" color="primary" size="small" onClick={signTX}>
                  Sign
                </Button>
              </div>
            </div>
            <div
              style={{ float: "right", width: "100%", paddingBottom: "10px" }}
            >
              <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
                Output
              </span>
              <Input value={signature} readonly={true} style={{
                borderColor: (signature !== "" ? "green" : "")
              }} />
            </div>
          </div>
        </Tab>
        <Tab title="Check">
          <div
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px"
            }}
          >
            <LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} id={"c1"} onChange={onChange} value={checkParams.p1} />
            <LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} id={"c2"} onChange={onChange} value={checkParams.p2} />
            <LabeledInput label={"Parameter 3"} placeholder={"Parameter 3"} id={"c3"} onChange={onChange} value={checkParams.p3} />
            <div style={{ float: "right" }}>
              <div style={{ float: "left", paddingRight: "10px" }}>
                <Button variant="contained" color="primary" size="small" onClick={checkTx}>
                  Check
                </Button>
              </div>
            </div>
            <div
              style={{ float: "right", width: "100%", paddingBottom: "10px" }}
            >
              <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
                Output
              </span>
              <Input value={checkedSignature} readonly={true} style={{
                borderColor: (signatureIsValid !== undefined ? (signatureIsValid ? "green" : "red") : "")
              }} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default Signature;
