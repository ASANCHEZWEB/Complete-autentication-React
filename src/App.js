import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AxiosRequest from "./componentes/axios/axios";

//importacion de componentes
import Signup from "./componentes/Signup";
import Login from "./componentes/Login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logeado: null,
    };
    this.service = new AxiosRequest();
  }

  logeadoState = (userObject) => {
    this.setState({ logeado: userObject });
    this.fetchUser();
  };

  fetchUser() {
    if (this.state.logeado === null) {
      this.service
        .loggedin()
        .then((response) => {
          this.setState({
            logeado: response,
          });
        })
        .catch((err) => {
          this.setState({
            logeado: false,
          });
        });
    }
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ logeado: null });
    });
  };

  render() {
    if (this.state.logeado) {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <button onClick={() => this.logoutUser()}>Logout</button>
                </Link>
              </li>
            </ul>
          </nav>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
            <Login getUser={this.logeadoState} />
            </Route>
            <Route exact path="/signup">
              <Signup getUser={this.logeadoState} />
            </Route>
            <Route exact path="/login">
              <Login getUser={this.logeadoState} />
            </Route>
          </Switch>
        </Router>
      );
      
    }
  }
}

export default App;
