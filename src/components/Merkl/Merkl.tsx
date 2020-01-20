import React, { useState, useEffect } from "react";
import {} from "./MerklStyles.js";
import { Input, Textarea } from "rendition";
import Title from "../util/Title/Title";
import Button from "@material-ui/core/Button";
import hash from "../../services/hasherService";
import useDataToHash from "../../customHooks/useDataToHash/useDataToHash";

const Merkl = () => {
  const [input, setInput] = useState<string | undefined>("");
  const [output, setOutput] = useState<string | undefined>("");

  const [dataToHash]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useDataToHash();

  useEffect(() => {
    if (input === "") setOutput("");
  }, [input]);

  useEffect(() => {
    if (dataToHash !== undefined) {
      setInput(dataToHash);
    }
  }, [dataToHash]);

  const merklInput = () => {
    const hashedInput = hash(input);
    setOutput(hashedInput);
  };

  return (
    <>
      <Title title="Merkl" />
      <div style={{ padding: "5px" }}>
        <div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
          <div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
            <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Input 1
            </span>
            <Input
              value={input}
              style={{ height: "30px", minHeight: "30px" }}
              onChange={e => {
                setInput(e.target.value);
              }}
            ></Input>
            <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Input 2
            </span>
            <Input
              value={input}
              style={{ height: "30px", minHeight: "30px" }}
              onChange={e => {
                setInput(e.target.value);
              }}
            ></Input>
            <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Input 3
            </span>
            <Input
              value={input}
              style={{ height: "30px", minHeight: "30px" }}
              onChange={e => {
                setInput(e.target.value);
              }}
            ></Input>
            <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Input 4
            </span>
            <Input
              value={input}
              style={{ height: "30px", minHeight: "30px" }}
              onChange={e => {
                setInput(e.target.value);
              }}
            ></Input>
            <Input
              value={input}
              style={{ height: "30px", minHeight: "30px" }}
              onChange={e => {
                setInput(e.target.value);
              }}
            ></Input>
          </div>
        </div>
        <div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
          <div
            style={{
              display: "inline-block",
              boxSizing: "border-box",
              width: "20%"
            }}
          >
            <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Output
            </span>
          </div>
          <div
            style={{
              display: "inline-block",
              boxSizing: "border-box",
              width: "80%"
            }}
          >
            <Input
              style={{ height: "30px" }}
              value={input === "" ? "" : output}
              placeholder="Output"
            />
          </div>
        </div>
        <div style={{ float: "right", paddingBottom: "10px" }}>
          <div style={{ float: "right", paddingRight: "10px" }}>
            <Button
              onClick={merklInput}
              variant="contained"
              color="primary"
              size="small"
            >
              Hash
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merkl;
