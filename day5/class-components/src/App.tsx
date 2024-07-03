import React from "react";
import logo from "./11-removebg-preview.png";
import "./App.css";
import Greeting from "./GreetingFunctional";

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      enteredName: "",
      message: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string; message: string };

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
      message: `Hello from, ${e.target.value}`,
    });
  }

  render() {
    console.log("rendering App");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            value={this.state.enteredName}
            onChange={this.onChangeName}
          ></input>
          <Greeting message={this.state.enteredName} />
        </header>
      </div>
    );
  }
}

export default App;
