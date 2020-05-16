import React, { Component } from "react";
import AllStats from "./components/AllStats";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading-main">
          <AllStats />
        </div>

        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
