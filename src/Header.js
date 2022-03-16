import React, { Component } from "react";
import "./Header.css";
import { Link, withRouter } from "react-router-dom";

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  handleLogout = () => {
    // clear sessionStorage
    this.setState({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("rtk");
    sessionStorage.removeItem("userData");
    this.props.history.push("/");
  };

  //if user is logged in then display greet message and Logout btn
  // and if NOT then, show login signup buttons
  conditionalHeader = () => {
    // if user is logged in
    if (this.state.userData.name) {
      let data = this.state.userData;
      let ouputArray = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", ouputArray);
      return (
        <>
          <div className="navbarOptions">
            <Link to="/viewOrder">View Order</Link>
            <Link to="">Hi, {ouputArray[0]}</Link>
            <button className="logout" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        </>
      );
    }
    //if user not logged in
    else {
      return (
        <>
          <div className="navbarOptions">
            <Link to="/login">
              <span className="Login">LogIn</span>
            </Link>
            <Link to="/register">
              <span className="SignUp">SignUp</span>
            </Link>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <div className="header">{this.conditionalHeader()}</div>
      </>
    );
  }

  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }));
  }
}

export default withRouter(Header);
// withRouter is used for nested component to get react-router-dom pack features
// such as history, params etc
