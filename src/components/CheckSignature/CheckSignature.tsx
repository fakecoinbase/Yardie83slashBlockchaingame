import React, { useState, useEffect } from "react";
import LabeledInput from "../util/LabeledInput/LabeledInput";
import Button from "@material-ui/core/Button";
import { Input } from "rendition";
import { check } from "../../services/signatureService";
import useDataToCheck, { DataToCheck } from "../../customHooks/useDataToCheck/useDataToCheck";

const CheckSignature = () => {
  const [checkParams, setCheckParams] = useState({ p1: "", p2: "", p3: "" });
  const [checkError, setCheckError] = useState("");
  const [checkedSignature, setCheckedSignature] = useState("");
  const [signatureIsValid, setSignatureIsValid] = useState(undefined);
  const [dataToCheck, setDataToCheck]: [
    DataToCheck,
    React.Dispatch<React.SetStateAction<DataToCheck | undefined>>
  ] = useDataToCheck();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "c1") setCheckParams({ ...checkParams, p1: e.target.value });
    if (e.target.id === "c2") setCheckParams({ ...checkParams, p2: e.target.value });
    if (e.target.id === "c3") setCheckParams({ ...checkParams, p3: e.target.value });
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

  const clearCheckFields = () => {
    setCheckParams({ p1: "", p2: "", p3: "" });
    setDataToCheck(undefined);
  };

  useEffect(() => {
    if (dataToCheck !== undefined) {
      setCheckParams({ p1: dataToCheck.signedData, p2: dataToCheck.pubKey, p3: dataToCheck.signature });
      setCheckedSignature("");
      setSignatureIsValid(undefined);
    }
  }, [dataToCheck]);

  return (
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
        <Button variant="contained" color="primary" size="small" onClick={checkTx} style={{ marginRight: "10px" }}>
          Check
        </Button>
        <Button variant="contained" color="default" size="small" onClick={clearCheckFields}>
          Clear
        </Button>
      </div>
      <div style={{ float: "right", width: "100%", paddingBottom: "5px" }}>
        <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
        <Input
          value={checkedSignature !== "" ? checkedSignature : checkError !== "" ? checkError : checkedSignature}
          readOnly={true}
          style={{
            borderColor: signatureIsValid !== undefined ? (signatureIsValid ? "green" : "red") : checkError ? "red" : ""
          }}
        />
      </div>
    </div>
  );
};

export default CheckSignature;
