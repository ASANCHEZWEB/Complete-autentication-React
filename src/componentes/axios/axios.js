import React from "react";
import axios from "axios";

class AxiosRequest extends React.Component {
  constructor(props) {
    super(props);

    this.service = axios.create({
      baseURL: "http://localhost:5000/api/",
      withCredentials: true
    });
  }

  signup(object) {
    const { username, password } = object;
    return this.service
      .post("/signup", { username, password })
      .then((response) => {
        return response;
      })
  }
  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }
}

export default AxiosRequest;
