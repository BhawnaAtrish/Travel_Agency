// TextBox.js
import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ label, value, onChange, width, placeholder }) => (
  <div className={`mb-3 ${width ? `col-md-${width}` : ""}`}>
    <label className="form-label">{label}</label>
    <input
      type="text"
      className="form-control"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off" // Disable autocomplete
    />
  </div>
);

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
  placeholder: PropTypes.string,
};

export default TextBox;
