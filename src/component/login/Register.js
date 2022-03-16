import React, { Component } from "react";

// register POST API
const registerUrl = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
  constructor() {
    super();
    // user input registeration form local state variables
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  }

  //handle change event for user input
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //submit event
  handleSubmit = () => {
    // fetch method to POST new user form details
    fetch(registerUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      // navigates to <Login /> page after user registeration
      .then(this.props.history.push("/login"));
  };

  render() {
    return (
      //registeration form
      <div>
        <div>Register</div>
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="ex:abc@gmail.com"
        />
        <br />
        <label htmlFor="phone">Contact Number</label>
        <br />
        <input
          type="number"
          name="phone"
          id="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Enter number"
        />
        <br />

        <label htmlFor="phone">Password</label>
        <br />
        <input
          type="text"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Enter password"
        />
        <br />
        <br />
        <button className="checkout" onClick={this.handleSubmit}>
          Register
        </button>
      </div>
    );
  }
}

export default Register;
