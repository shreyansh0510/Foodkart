import React from "react";
import "./ViewOrderDisplay.css";

function ViewOrderDisplay(props) {
  const renderOrdeList = ({ bookdata }) => {
    if (bookdata) {
      return bookdata.map((items, index) => {
        return (
          <tr key={index}>
            <td>{items.id}</td>
            <td>{items.resaurantName}</td>
            <td>{items.name}</td>
            <td>{items.phone}</td>
            <td>{items.email}</td>
            <td>{items.totalCost}</td>
            <td>{items.date}</td>
            <td>{items.status}</td>
            <td>{items.bankname}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className="orderDisplayClass">
        <div className="orderList">Order List</div>
        <table className="table">
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Hotel</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
              <th>Status</th>
              <th>Bank Name</th>
            </tr>
          </thead>
          <tbody>{renderOrdeList(props)}</tbody>
        </table>
      </div>
    </>
  );
}

export default ViewOrderDisplay;
