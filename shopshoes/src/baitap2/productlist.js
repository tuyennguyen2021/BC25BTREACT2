import React, { Component } from "react";
import Productitem from "./productitem";

export default class Productlist extends Component {
  renderListProducts = () => {
    return this.props.productsdata.map((item) => {
      console.log(item);
      return (
        <Productitem
          key={item.id}
          product={item}
          getDetail={this.props.getDetail}
        />
      );
    });
  };
  render() {
    console.log(this.props.productsdata);
    return (
      <div className="container">
        <h3 className="text-center my-4">Shop Shoes</h3>
        <div className="row">{this.renderListProducts()}</div>
      </div>
    );
  }
}
