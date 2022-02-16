import React from "react";
import "./Header.css";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="navbarLeft">
            <div className="home">Home</div>
          </div>
          <div className="navbarRight">
            <div className="logo">
              <span className="getApp">Get the App</span>
              <PhoneIphoneIcon className={classes.root} fontSize="small" />
            </div>
            <div className="navbarOptions">
              <span className="Add Restaurant">Add Restaurant</span>
              <span className="Login">LogIn</span>
              <span className="SignUp">SignUp</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
