import React, { useState, useEffect } from "react";
import { Input } from "rendition";
import Button from "@material-ui/core/Button";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput/LabeledInput";
import { sign } from "../../services/signatureService";
import useDataToSign from "../../customHooks/useDataToSign";

const Signature = () => {
  const [signParams, setSignParams] = useState({ p1: "", p2: "" });
  const [signature, setSignature] = useState("");
  const [signError, setSignError] = useState("");
  const [dataToSign, setDataToSign]: [
    string,
    React.Dispatch<React.SetStateAction<string | undefined>>
  ] = useDataToSign();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "s1") setSignParams({ ...signParams, p1: e.target.value });
    if (e.target.id === "s2") setSignParams({ ...signParams, p2: e.target.value });
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

  return (
    <>
      <Title title="Signature" />
      <div
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
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
    </>
  );
};

export default Signature;
