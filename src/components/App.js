import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../pages/auth";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/login";
import Playground from "../pages/playground";
import './../styles/App.css';

const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playground">Private Playground</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <p>Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="main-container">
          <Navigation />
          <Switch>
            <Route exact path="/" component={() => <div><h2>Home Page (Public)</h2></div>} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/playground" component={Playground} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
