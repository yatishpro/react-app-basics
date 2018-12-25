import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <button
        onClick={props.click}
        style={{
          float: "right",
          display: "block",
          borderRadius: "50px",
          fontWeight: "bold",
          backgroundColor: "#ff00ff",
          color: "white",
          cursor: "pointer"
        }}
      >
        X
      </button>
      <p>
        I'am {props.name} I am {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
