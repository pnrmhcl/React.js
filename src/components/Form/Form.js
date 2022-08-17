import React from "react";
import "./form.css";

function Form({ children }) {
  return (
    <div className="form">
      <div className="form_elements">{children}</div>
    </div>
  );
}

export default Form;
