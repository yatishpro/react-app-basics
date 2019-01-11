import React, { Component } from "react";
import classes from "./app.module.scss";
import Persons from "../Component/Persons/Persons";
import Cockpit from "../Component/Cockpit/Cockpit";

class App extends Component {
  state = {
    users: [
      { name: "Yatish", age: "23" },
      { name: "Pro", age: "24" },
      { name: "Ultimate", age: "25" }
    ],
    showPersons: false
  };

  constructor() {
    super();
    console.log("constructor called");
  }
  componentWillMount() {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  nameChangeHandler = (event, id) => {
    const users = [...this.state.users];
    users[id].name = event.target.value;

    this.setState({ users });
  };

  deletePersonHandler = personIndex => {
    const users = [...this.state.users];
    users.splice(personIndex, 1);
    this.setState({ users });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    console.log("render method called");
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.users}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          persons={this.state.users}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
