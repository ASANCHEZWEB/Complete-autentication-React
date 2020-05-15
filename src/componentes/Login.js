import React from "react";
import { Link } from "react-router-dom";
import AxiosRequest from './axios/axios'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
this.service = new AxiosRequest()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.service.login(this.state.username,this.state.password).then(response=>{
      this.props.getUser(response);
    })

    event.preventDefault();
  }

  render() {
    return (
      <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <form onSubmit={this.handleSubmit} className="form-signin">
          <div className="text-center mb-4">
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt=""
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 font-weight-normal">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Acceso
                </font>
              </font>
            </h1>
            <p>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Si aún no tienes cuenta , <Link to="/signup">regístrate aquí</Link>.
                </font>
              </font>
            </p>
          </div>

          <div className="form-label-group">
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Nombre de usuario"
              required
            />
            <label>
              <font style={{ verticalAlign: "inherit" }}></font>
            </label>
          </div>

          <div className="form-label-group">
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Contraseña"
              required
            />
            <label>
              <font style={{ verticalAlign: "inherit" }}></font>
            </label>
          </div>

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            value="Submit"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Iniciar sesión</font>
            </font>
          </button>
          <p className="mt-5 mb-3 text-muted text-center">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>© 2019-2020</font>
            </font>
          </p>
        </form>
      </div>
    );
  }
}







export default Login;