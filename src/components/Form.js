// Form.js
import React, { useState } from "react";
import TextBox from "./TextBox";
import Button from "./Button";
import Label from "./Label";
import FormTitle from "./FormTitle";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { name, email });
  };

  return (
    <div>
      <FormTitle />
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <Label text="Name" htmlFor="name" />
            <TextBox
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              id="name"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Label text="Email" htmlFor="email" />
            <TextBox
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              id="email"
            />
          </div>
        </div>
      </div>
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Form;
