import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor() {
    super();
    console.log("Persons Constructor Method called");
  }

  componentWillMount() {
    console.log("Persons component will Mount");
  }

  componentDidMount() {
    console.log("Persons component did Mount");
  }

  render() {
    console.log("Persons Render Method called");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={index}
          changed={event => this.props.changed(event, index)}
        />
      );
    });
  }
}

// const persons = props =>
//   props.persons.map((person, index) => {
//     console.log("Persons child component called");
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={index}
//         changed={event => props.changed(event, index)}
//       />
//     );
//   });

export default Persons;
