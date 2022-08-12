import React, { Component } from "react";
import axios from "axios";

export default class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get("http://localhost:5000/user/get", {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const users = data.map((u) => (
          <thead key={u.email}>
            <tr>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          </thead>
        ));

        this.setState({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return (
      <div>
        <table border={"2px "}>{this.users}</table>
      </div>
    );
  }
}
