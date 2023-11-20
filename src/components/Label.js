// Label.js
import React from "react";
import PropTypes from "prop-types";

const Label = ({ text, htmlFor }) => (
  <label htmlFor={htmlFor} className="form-label">
    {text}
  </label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
