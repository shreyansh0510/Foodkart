import React, { Component } from "react";

// login POST API
const loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
  constructor() {
    super();
    // user input login form local state variable
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  //handle change event for user input
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //submit event
  handleSubmit = () => {
    // fetch method to POST
    fetch(loginUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        // checks if user is NOT found i.e. false
        if (data.auth === false) {
          // sets the message state to data.token which is just a message
          this.setState({ message: data.token });
        } else {
          // if user is found i.e. authenticated
          // assigns data.token message to ltk key or variable using .setItem() method
          sessionStorage.setItem("ltk", data.token);
          // user is navigated to profile
          this.props.history.push("/");
        }
      });
  };

  render() {
    //login form
    return (
      <div>
        <div>Login </div>
        <div>{this.state.message}</div>
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
        <button className="checkout" onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
