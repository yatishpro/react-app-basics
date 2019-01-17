import React, { Component } from "react";
import classes from "./person.module.scss";
import Aux from "../../../hoc/Auxs";
import WithClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import { AuthContext } from "../../../Containers/App";

class Person extends Component {
  constructor() {
    super();
    console.log("Person Constructor Method called");
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("Person component will Mount");
  }

  componentDidMount() {
    console.log("Person component did Mount");
    // this.focus();
  }

  focus() {
    this.inputElement.current.focus();
  }

  componentWillUnmount() {
    console.log("Person component will un Mount");
  }

  render() {
    console.log("Person Render Method called");

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I am authenticated</p> : null)}
        </AuthContext.Consumer>

        <button onClick={this.props.click} className={classes.delete}>
          X
        </button>
        <p>
          I'am {this.props.name} I am {this.props.age} years
        </p>
        <p>{this.props.children}</p>
        <p>{}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  trackId: PropTypes.number
};

export default WithClass(Person, classes.Person);
