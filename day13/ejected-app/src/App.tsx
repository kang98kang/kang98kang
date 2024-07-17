import React from "react";
import DisplayText from "./DisplayText";
import "./App.css";

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (usersResponse.ok) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username;
      });
      return userByName;
    }
    return "";
  };
  return (
    <div className="App">
      <h1>
        <label htmlFor="headingTest">heading test</label>
        <input id="headingTest" placeholder="username"></input>
      </h1>

      <input type="text" id="lastName" value={"Norris"} />
      <textarea id="messageTextArea" />

      {/* <DisplayText getUserFullname={getUserFullname} /> */}
    </div>
  );
}

export default App;
