import axios from "axios";
import React, { Component } from "react";
import "./RestaurantsDetails.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import MenuDisplay from "./MenuDisplay";

//restaurant url (id,name,address,cost,rating...)
const url = "https://zomatoajulypi.herokuapp.com/details";
//restaurant's menu url (garlicbread,Farmhouse,Indi Tandoori Paneer...)
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu";

class RestaurantsDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      details: "", //(id,name,address,cost,rating...)
      menu: "", //(garlicbread,Farmhouse,Indi Tandoori Paneer...)
      menuItems: "", //restaurant menu items id [1,2,3...]
    };
  }

  //addToCart function
  addToCart = (data) => {
    this.setState({ menuItems: data });
  };

  render() {
    return (
      <div className="restaurantsDetailsClass">
        {/* restaurant detail MUI card (images, description, react-tabs, menu, proceed) */}
        <Card sx={{ maxWidth: "100%" }}>
          <CardActionArea>
            <CardMedia
              height={400}
              component="img"
              image={this.state.details.restaurant_thumb}
              alt={this.state.details.restaurant_name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {this.state.details.restaurant_name}
              </Typography>
              <Typography color="text.secondary">
                <span>
                  ⭐Rating: {this.state.details.average_rating} |&nbsp;
                  {this.state.details.rating_text}
                </span>
                <br />
                <br />
                <span> Cost of two: ₹{this.state.details.cost}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* react-tabs */}
          <div className="reactTabs">
            <Tabs>
              <div className="tabList">
                <TabList>
                  <Tab>Menu</Tab>
                  <Tab>Details</Tab>
                  <Tab>Contact</Tab>
                </TabList>
              </div>

              <TabPanel>
                <div>
                  <MenuDisplay
                    menu={this.state.menu}
                    finalOrder={(id) => {
                      this.addToCart(id);
                    }}
                  />
                  <br />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  {this.state.details.restaurant_name} is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </div>
                <br />
              </TabPanel>
              <TabPanel>
                <p> 📞Contact: {this.state.details.contact_number}</p>
                <br />
                <p> 🏛️Address: {this.state.details.address}</p>
                <br />
              </TabPanel>
            </Tabs>
            <Button sx={{ marginTop: 1 }} variant="contained" color="success">
              Proceed
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // api call on component mount using aync-await
  async componentDidMount() {
    //get restaurant id using param
    const restaurantId = this.props.match.params.restaurantId;
    //fetching restaurant data
    let response1 = await axios.get(`${url}/${restaurantId}`);
    //fetching restaurant's menu data
    let restaurantmenu = await axios.get(`${menuUrl}/${restaurantId}`);
    //assigning  to restaurant data to a local state variable
    this.setState({ details: response1.data[0] });
    //assigning  to restaurant's menu data to a local state variable
    this.setState({ menu: restaurantmenu.data });
  }

  //   componentDidMount() {
  //     const restaurantId = this.props.match.params.restaurantId;
  //     fetch(`${url}/${restaurantId}`, { method: "GET" })
  //       .then((res) => res.json())
  //       .then((data) => this.setState({ details: data[0] }));
  //   }
}

export default RestaurantsDetails;
