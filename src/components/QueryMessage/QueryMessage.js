import React from "react";
import "./QueryMessage.scss";

const QueryMessage = (props) => (
  <div className="message-body">
    <div onClick={props.resetErrorState()} className="message-card">
      <p>
        <small>{props.error}</small>
      </p>{" "}
    </div>
  </div>
);

export default QueryMessage;
