import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "../pages/auth";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/login";
import Playground from "../pages/playground";
import './../styles/App.css';

const Navigation = () => {
  const { isAuthenticated } = useAuth();
  return (
    <nav>
      <p>{isAuthenticated ? "You are authenticated, welcome!" : "You are not authenticated, Please login first"}</p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
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
            <Route path="/login" component={Login} />
            <PrivateRoute path="/playground" component={Playground} />
            <Route component={() => <div>Page not Found</div>} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
