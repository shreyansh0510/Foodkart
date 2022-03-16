import React, { Component } from "react";
import "./PlaceOrder.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const menuUrl = "https://zomatoajulypi.herokuapp.com/menuItem";
//create local api name booking.json for FETCH and POST request
const postUrl = "http://localhost:3214/booking";

class PlaceOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100000),
      hotel_name: this.props.match.params.restaurantName,
      details: [],
      name: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[0]
        : "", // condition to display user name by default by using session storage
      email: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[1]
        : "", // condition to display user email by default by using session storage
      phone: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[2]
        : "", // condition to display user phone by default by using session storage
      address: "123 DLF City Noida",
      cost: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    if (sessionStorage.getItem("userData")) {
      event.preventDefault();
      var obj = this.state;
      //overwriting details state value
      obj.details = sessionStorage.getItem("menu");

      fetch(postUrl, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        // when sending data to  web server, the data has to be a string.
        body: JSON.stringify(obj),
      }).then(this.props.history.push("/viewOrder"));
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="placeOrderClass">
        <div className="restuarantName">Welcome to {this.state.hotel_name}</div>
        <br />
        <div className="totalCost">Total Cost: Rs.{this.state.cost}</div>
        <br />

        {/* to display selected food  */}
        <div className="totalItems">
          {this.state.details.map((items, index) => {
            return (
              <div className="orderItems" key={index}>
                <Card sx={{ width: 550, height: 200 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={items.img}
                    alt={items.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {items.name}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* place order form */}
        <form
        // action="https://developerpayment.herokuapp.com/paynow"
        // method="POST"
        >
          <div className="orderForm">
            <div className="coloumn1">
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
            </div>

            <div className="coloumn2">
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
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                name="address"
                id="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Enter address"
              />
            </div>
          </div>
          <input type="hidden" name="cost" value={this.state.cost} />
          <input type="hidden" name="id" value={this.state.id} />
          <input
            type="hidden"
            name="hotel_name"
            value={this.state.hotel_name}
          />

          <div className="checkoutButton">
            <button
              className="checkout"
              type="submit"
              onClick={this.handleSubmit}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }

  //on page load
  componentDidMount() {
    //to retrieve session storage menu data in PlaceOrder component
    var menuItems = sessionStorage.getItem("menu");
    //conversion of string into array "1,2,3" > [1, 2, 3]
    var orderId = [];
    menuItems.split(",").map((items) => {
      return orderId.push(parseInt(items));
      // return "OK";
    });
    //api call to POST orderId
    fetch(menuUrl, {
      method: "POST",
      headers: {
        // accept: "application/json",
        "content-type": "application/json",
      },
      // when sending data to  web server, the data has to be a string.
      body: JSON.stringify(orderId),
    })
      .then((res) => res.json())
      .then((data) => {
        var price = 0;
        var menuDetails = [];
        data.map((items) => {
          var myObj = {};
          price = price + parseInt(items.menu_price);
          myObj.name = items.menu_name;
          myObj.img = items.menu_image;
          menuDetails.push(myObj);
          return "OK";
        });
        this.setState({ cost: price, details: menuDetails });
      });
  }
}

export default PlaceOrder;
