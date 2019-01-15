import React from "react";
import classes from "./cockpit.module.scss";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  const style = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid blue"
  };

  const classesCustom = [];
  if (props.persons.length <= 2) {
    classesCustom.push("red");
  }
  if (props.persons.length <= 1) {
    classesCustom.push("bold");
  }

  if (props.showPersons) {
    style.backgroundColor = "red";
    style.color = "white";
    style.border = "1px solid yellow";
  }

  console.log("child cockpit component called");

  return (
    <Aux>
      <h2>{props.title}</h2>
      <p className={classesCustom.join(" ")}>Oh Really Working!</p>
      <button
        onClick={props.clicked}
        className={classes.ShowButton}
        style={style}
      >
        Toogle Persons
      </button>
      <button
        className={classes.ShowButton}
        style={{ margin: "10px auto" }}
        onClick={props.login}
      >
        {props.authStatus ? "Logout" : "Login"}
      </button>
    </Aux>
  );
};

export default React.memo(cockpit);
