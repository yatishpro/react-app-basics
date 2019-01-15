import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("Persons Constructor Method called");
    this.lastElementRef = React.createRef();
    console.log(props);
  }

  componentWillMount() {
    console.log("Persons component will Mount");
  }

  componentDidMount() {
    console.log("Persons component did Mount");
    this.lastElementRef.current.focus();
  }

  componentWillUnmount() {
    console.log("Persons component will Un mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "Update Person.js Inside componen will receive props",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Update Person.js inside should component update",
      nextProps,
      this.props.persons
    );
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Update Person.js will update", nextProps, this.props.persons);
  }

  componentDidUpdate() {
    console.log("Update Person.js component did update");
  }

  render() {
    console.log("Persons Render Method called");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          ref={this.lastElementRef}
          key={index}
          trackId={index}
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
