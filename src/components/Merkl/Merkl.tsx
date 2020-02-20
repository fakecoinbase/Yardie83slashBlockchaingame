import React, { useState } from "react";
import { Input } from "rendition";
import Title from "../util/Title/Title";
import Button from "@material-ui/core/Button";
import LabeledInput from "../util/LabeledInput";
import merkl from "../../services/merklService";

const Merkl = () => {
  const [input1, setInput1] = useState<string | undefined>();
  const [input2, setInput2] = useState<string | undefined>();
  const [input3, setInput3] = useState<string | undefined>();
  const [input4, setInput4] = useState<string | undefined>();
  const [output, setOutput] = useState<string | undefined>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "i1") setInput1(e.target.value);
    if (e.target.id === "i2") setInput2(e.target.value);
    if (e.target.id === "i3") setInput3(e.target.value);
    if (e.target.id === "i4") setInput4(e.target.value);
  };

  const onMerkl = () => {
    setOutput(merkl(input1, input2, input3, input4));
  };

  return (
    <>
      <Title title="Merkle" />
      <div style={{ padding: "5px" }}>
        <div style={{ margin: "auto", width: "100%" }}>
          <div style={{ float: "right", width: "100%" }}>
            <LabeledInput
              placeholder={"Tx Hash 1"}
              id={"i1"}
              onChange={onChange}
            />
            <LabeledInput
              placeholder={"Tx Hash 2"}
              id={"i2"}
              onChange={onChange}
            />
            <LabeledInput
              placeholder={"Tx Hash 3"}
              id={"i3"}
              onChange={onChange}
            />
            <LabeledInput
              placeholder={"Tx Hash 4"}
              id={"i4"}
              onChange={onChange}
            />
          </div>
        </div>
        <div style={{ margin: "auto", width: "100%", paddingBottom: "5px" }}>
          <div
            style={{
              display: "inline-block",
              boxSizing: "border-box",
              width: "20%"
            }}
          >
            {/* <span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>
              Output
            </span> */}
          </div>
          <div style={{ float: "right", paddingRight: "5px", paddingBottom: '5px' }}>
            <Button
              onClick={onMerkl}
              variant="contained"
              color="primary"
              size="small"
            >
              Hash
            </Button>
          </div>
          <div
            style={{
              display: "inline-block",
              boxSizing: "border-box",
              // width: "80%"
            }}
          >
            <Input
              style={{ height: "30px" }}
              value={output}
              placeholder="Output"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Merkl;
