import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import firebase from "./firebaseConfig";
import Login from "./components/Account/Login";
import Create from "./components/Account/create";
import Home from "./components/Home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Account/login" component={Login} />
        <Route exact path="/Account/create" component={Create} />
        <PrivateRoute exact path="/home" component={Home} />
        {/* Add more private routes for authenticated pages */}
      </Switch>
    </Router>
  );
};

export default App;
