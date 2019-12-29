import React, { useState, useEffect } from "react";
import { Input, Tabs, Tab } from "rendition";
import Button from "@material-ui/core/Button";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput/LabeledInput";
import { sign, check } from "../../services/signatureService";
import useDataToSign from "../../customHooks/useDataToSign";
import useDataToCheck, { DataToCheck } from "../../customHooks/useDataToCheck";

const Signature = () => {
  const [signParams, setSignParams] = useState({ p1: "", p2: "" });
  const [checkParams, setCheckParams] = useState({ p1: "", p2: "", p3: "" });
  const [signature, setSignature] = useState("");
  const [checkedSignature, setCheckedSignature] = useState("");
  const [signatureIsValid, setSignatureIsValid] = useState(undefined);
  const [signError, setSignError] = useState("");
  const [checkError, setCheckError] = useState("");
  const [dataToSign, setDataToSign]: [
    string,
    React.Dispatch<React.SetStateAction<string | undefined>>
  ] = useDataToSign();
  const [dataToCheck, setDataToCheck]: [
    DataToCheck,
    React.Dispatch<React.SetStateAction<DataToCheck | undefined>>
  ] = useDataToCheck();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "s1") setSignParams({ ...signParams, p1: e.target.value });
    if (e.target.id === "s2") setSignParams({ ...signParams, p2: e.target.value });
    if (e.target.id === "c1") setCheckParams({ ...checkParams, p1: e.target.value });
    if (e.target.id === "c2") setCheckParams({ ...checkParams, p2: e.target.value });
    if (e.target.id === "c3") setCheckParams({ ...checkParams, p3: e.target.value });
  };

  const signTX = () => {
    const { p1, p2 } = signParams;
    let result;
    try {
      result = sign(p1, p2);
      setSignature(result);
    } catch (error) {
      setSignError("Input parameter is not supported");
    }
  };

  const clearSignFields = () => {
    setSignParams({ p1: "", p2: "" });
    setDataToSign(undefined);
  };

  const clearCheckFields = () => {
    setCheckParams({ p1: "", p2: "", p3: "" });
    setDataToCheck(undefined);
  };

  const checkTx = () => {
    const { p1, p2, p3 } = checkParams;
    let result;
    try {
      result = check(p1, p2, p3);
      setSignatureIsValid(result);
      const response = result ? "Signature is valid" : "Signature is invalid";
      setCheckedSignature(response);
    } catch (error) {
      setCheckError("Input parameter is not supported");
    }
  };

  useEffect(() => {
    if (checkParams.p1 === "" || checkParams.p2 === "" || checkParams.p3 === "") {
      setCheckedSignature("");
      setSignatureIsValid(undefined);
      setCheckError("");
    }
  }, [checkParams]);

  useEffect(() => {
    if (signParams.p1 === "" || signParams.p2 === "") {
      setSignature("");
      setSignError("");
    }
  }, [signParams]);

  useEffect(() => {
    if (dataToSign !== undefined) {
      setSignParams({ p1: dataToSign, p2: "" });
    }
  }, [dataToSign]);

  useEffect(() => {
    if (dataToCheck !== undefined) {
      setCheckParams({ p1: dataToCheck.signedData, p2: dataToCheck.pubKey, p3: dataToCheck.signature });
    }
  }, [dataToCheck]);

  return (
    <>
      <Title title="Sign & Check" />
      <Tabs>
        <Tab title="Sign">
          <div
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "5px"
            }}
          >
            <LabeledInput
              label={"Data to sign"}
              placeholder={"Data to sign"}
              id={"s1"}
              onChange={onChange}
              value={signParams.p1}
            />
            <LabeledInput
              label={"Private Key"}
              placeholder={"Private Key"}
              id={"s2"}
              onChange={onChange}
              value={signParams.p2}
            />
            <div style={{ float: "right", flexDirection: "row", flex: 1 }}>
              <Button variant="contained" color="primary" size="small" onClick={signTX} style={{ marginRight: "10px" }}>
                Sign
              </Button>
              <Button variant="contained" color="default" size="small" onClick={clearSignFields}>
                Clear
              </Button>
            </div>
            <div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
              <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
              <Input
                value={signature !== "" ? signature : signError !== "" ? signError : signature}
                readOnly={true}
                style={{
                  borderColor: signature !== "" ? "green" : signError === "" ? "" : "red"
                }}
              />
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
            <LabeledInput
              label={"Signed data"}
              placeholder={"Signed data"}
              id={"c1"}
              onChange={onChange}
              value={checkParams.p1}
            />
            <LabeledInput
              label={"Public Key"}
              placeholder={"Public Key"}
              id={"c2"}
              onChange={onChange}
              value={checkParams.p2}
            />
            <LabeledInput
              label={"Signature to check"}
              placeholder={"Signature to check"}
              id={"c3"}
              onChange={onChange}
              value={checkParams.p3}
            />
            <div style={{ float: "right", flexDirection: "row", flex: 1 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={checkTx}
                style={{ marginRight: "10px" }}
              >
                Check
              </Button>
              <Button variant="contained" color="default" size="small" onClick={clearCheckFields}>
                Clear
              </Button>
            </div>
            <div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
              <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
              <Input
                value={checkedSignature !== "" ? checkedSignature : checkError !== "" ? checkError : checkedSignature}
                readOnly={true}
                style={{
                  borderColor:
                    signatureIsValid !== undefined ? (signatureIsValid ? "green" : "red") : checkError ? "red" : ""
                }}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default Signature;
