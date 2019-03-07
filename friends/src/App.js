import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendListView from "./views/FriendListView";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <Link to="/friends">FriendsList</Link>
            <li />
          </ul>

          <h1>Friends</h1>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendListView} />
        </div>
      </Router>
    );
  }
}

export default App;
