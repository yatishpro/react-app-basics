import React, { Component } from "react";
import classes from "./person.module.scss";

class Person extends Component {
  constructor() {
    super();
    console.log("Person Constructor Method called");
  }

  componentWillMount() {
    console.log("Person component will Mount");
  }

  componentDidMount() {
    console.log("Person component did Mount");
  }

  render() {
    console.log("Person Render Method called");

    return (
      <div className={classes.Person}>
        <button onClick={this.props.click} className={classes.delete}>
          X
        </button>
        <p>
          I'am {this.props.name} I am {this.props.age} years
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

// const Person = props => {
//   console.log("Person Child Compnent Called");
//   return (
//     <div className={classes.Person}>
//       <button onClick={props.click} className={classes.delete}>
//         X
//       </button>
//       <p>
//         I'am {props.name} I am {props.age} years
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

export default Person;
