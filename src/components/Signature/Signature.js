<<<<<<< HEAD
import React, { } from 'react';
import { Input, Tabs, Tab } from 'rendition';
import Button from '@material-ui/core/Button';
import Title from '../util/Title/Title'
import LabeledInput from '../util/LabeledInput';

const Signature = () => {
	return (
		<>
			<Title title="Signature" />
			<Tabs >
				<Tab title="Sign">
					<div style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop:"10px" }}>
						<LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} />
						<LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} />
						<div style={{ float: "right" }}>
							<div style={{ float: "left", paddingRight: "10px" }}>
								<Button variant="contained" color="primary" size="small">Sign</Button>
							</div>
						</div>
						<div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
							<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
							<Input value="" readonly={true} style={{ height: "30px" }}></Input>
						</div>
					</div>
				</Tab>
				<Tab title="Check">
					<div style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop:"10px" }}>
						<LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} />
						<LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} />
						<LabeledInput label={"Parameter 3"} placeholder={"Parameter 3"} />
						<div style={{ float: "right"}}>
							<div style={{ float: "left", paddingRight: "10px" }}>
								<Button variant="contained" color="primary" size="small">Check</Button>
							</div>
						</div>
						<div style={{ float: "right", width: "100%", paddingBottom: "10px" }}>
							<span style={{ fontFamily: "Source Sans Pro", color: "#4D4F5C" }}>Output</span>
							<Input value="" readonly={true} style={{ height: "30px" }}></Input>
						</div>
					</div>
				</Tab>
			</Tabs>

		</>
	);
=======
import React from "react";
import { Input, Tabs, Tab } from "rendition";
import Button from "@material-ui/core/Button";
import Title from "../util/Title/Title";
import LabeledInput from "../util/LabeledInput";

const Signature = () => {
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
            <LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} />
            <LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} />
            <div style={{ float: "right" }}>
              <div style={{ float: "left", paddingRight: "10px" }}>
                <Button variant="contained" color="primary" size="small">
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
              <Input value="" readonly={true}></Input>
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
            <LabeledInput label={"Parameter 1"} placeholder={"Parameter 1"} />
            <LabeledInput label={"Parameter 2"} placeholder={"Parameter 2"} />
            <LabeledInput label={"Parameter 3"} placeholder={"Parameter 3"} />
            <div style={{ float: "right" }}>
              <div style={{ float: "left", paddingRight: "10px" }}>
                <Button variant="contained" color="primary" size="small">
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
              <Input value="" readonly={true}></Input>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
>>>>>>> 4c7f14dfe54c6ce8a8678e4095c42da8f9ec6d53
};

export default Signature;
