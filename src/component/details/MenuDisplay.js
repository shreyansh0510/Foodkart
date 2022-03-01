import React, { Component } from "react";
import "./MenuDisplay.css";
import Button from "@mui/material/Button";
import {
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";

class MenuDisplay extends Component {
  constructor() {
    super();
    this.state = {
      orderId: [], //stores menu items(dish) unique ID
    };
  }

  addItems = (items) => {
    //add menu item's(dish) unique ID to orderId array[]
    this.state.orderId.push(items);
    //passes data from child(MenuDisplay) to parent(RestaurantDetails) inorder
    //rerenders MenuDisplay component
    this.props.finalOrder(this.state.orderId);
  };

  //returns menu item's(dish) unique ID
  renderItems = (items) => {
    console.log(items);
    if (items) {
      return items.map((item) => {
        return <span key={item}>{item}&nbsp;</span>;
      });
    }
  };

  //returns restaurant's menu items(dishes) with image, dish name, price, add or remove buttons
  //destructuring of props: {menu}
  renderMenu = ({ menu }) => {
    if (menu) {
      return menu.map((items) => {
        return (
          <Paper
            key={items.menu_id}
            sx={{ width: "100%", maxWidth: "100%", marginTop: 1 }}
          >
            <MenuList>
              <MenuItem>
                <ListItemText>
                  <img
                    src={items.menu_image}
                    alt={items.menu_name}
                    style={{
                      height: "150px",
                      width: "300px",
                      borderRadius: 5,
                    }}
                  />
                </ListItemText>
                <ListItemText>
                  <span style={{ fontSize: "1.5rem" }}>
                    {items.menu_name} |&nbsp;₹{items.menu_price}
                  </span>
                </ListItemText>
                <ListItemText>
                  <span style={{ fontSize: "1.5rem" }}></span>
                </ListItemText>
                <Typography variant="body2" color="text.secondary">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => this.addItems(items.menu_id)}
                  >
                    +
                  </Button>
                  &nbsp;
                  <Button variant="contained">-</Button>
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        );
      });
    }
  };

  render() {
    return (
      <>
        <div className="menuDisplayClass">
          <div className="cartItems">
            <h1 className="itemsAdded">Items added:</h1>
            {/* pass orderId array[] to renderItems function */}
            {this.renderItems(this.state.orderId)}
            <br />
          </div>
          {/* passes restaurant's menu API data as props to renderMenu funtion */}
          <div className="menuItems">{this.renderMenu(this.props)}</div>
        </div>
      </>
    );
  }
}

export default MenuDisplay;
