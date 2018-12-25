import React, { Component } from "react";
import "./App.css";
import Person from "./Component/Person";

class App extends Component {
  state = {
    users: [
      { name: "Yatish", age: "23" },
      { name: "Pro", age: "24" },
      { name: "Ultimate", age: "25" }
    ],
    showPersons: false
  };

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "0 auto",
      textAlign: "center",
      display: "block",
      cursor: "pointer",
      color: "black",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.users.map((user, index) => {
            return (
              <Person
                key={index}
                name={user.name}
                changed={event => this.nameChangeHandler(event, index)}
                age={user.age}
                id={index}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style.color = "white";
      style.border = "1px solid yellow";
    }

    const classes = [];
    if (this.state.users.length <= 2) {
      classes.push("red");
    }
    if (this.state.users.length <= 1) {
      classes.push("bold");
    }

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>React Working samples</h2>
        <p className={classes.join(" ")} style={{ textAlign: "center" }}>
          Oh Really Working!
        </p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toogle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello World!")
    // );
  }
}

export default App;
