import React from "react";
import { Input, Select } from "rendition";
import { } from "./LabeledInputStyles.js";
type Props = {
  label?: string;
  placeholder?: string;
  options?: string[];
  id?: string;
  onChange?: ((e: any) => void) | undefined;
  value?: any;
  readOnly?: boolean;
};
const LabeledInput = (props: Props) => {
  const { label, placeholder, id, onChange = () => { }, value, readOnly, options } = props;

  return (
    <div style={{ margin: "auto", width: "100%", paddingBottom: "10px" }}>
      {label && <div
        style={{
          display: "inline-block",
          boxSizing: "border-box",
          width: "30%",
          fontFamily: "Source Sans Pro",
          color: "#4D4F5C"
        }}
      >
        <span>{label}</span>
      </div>}
      <div style={{ display: "inline-block", boxSizing: "border-box", width:  (label ? "70%" : '100%')  }}>
        {options ? (
          <Select
            options={options}
            value={value}
            onChange={e => onChange(e)}
            id={id}
            style={{ height: "30px" }}
            placeholder={placeholder ? placeholder : ""}
          />
        ) : (
            <Input
              readOnly={readOnly}
              value={value}
              onChange={e => onChange(e)}
              id={id}
              style={{ height: "30px" }}
              placeholder={placeholder ? placeholder : ""}
            />
          )}
      </div>
    </div>
  );
};

export default LabeledInput;
