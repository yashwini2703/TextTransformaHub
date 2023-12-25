import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "70px" }}>
      {props.alert && (
        <div>
          <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
