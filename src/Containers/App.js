import React, { Component } from "react";
import classes from "./app.module.scss";
import Persons from "../Component/Persons/Persons";
import Cockpit from "../Component/Cockpit/Cockpit";
import Aux from "../hoc/Auxs";
import WithClass from "../hoc/withClass";

export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    users: [
      { name: "Yatish", age: 23 },
      { name: "Pro", age: 24 },
      { name: "Ultimate", age: 25 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: true
  };

  constructor() {
    super();
    console.log("constructor called");
  }
  componentWillMount() {
    console.log("component will mount");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "App.js inside get derived state form props",
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("method in App.js get shapshot before update");
  }

  componentDidMount() {
    console.log("component did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Update App.js inside should component update",
      nextProps,
      this.props.persons
    );
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Update App.js will update", nextProps, this.props.persons);
  }

  componentDidUpdate() {
    console.log("Update App.js component did update");
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    const auth = this.state.authenticated;
    this.setState((prevState, props) => {
      return {
        authenticated: !auth
      };
    });
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
      <Aux>
        <Cockpit
          title={this.props.title}
          persons={this.state.users}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
          authStatus={this.state.authenticated}
        />

        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
