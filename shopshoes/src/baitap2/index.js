import React, { Component } from "react";
import Productlist from "./productlist";
import data from "./data.json";
import Modal from "./modal";

export default class ShoesShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
      productDetails: data[0],
    };
  }

  handleDetailProduct = (product) => {
    const productNew = {
      image: product.image,
      name: product.name,
      alias: product.alias,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
    };

    this.setState(
      {
        productDetails: productNew,
      },
      () => {
        console.log(this.state.productDetails);
      }
    );
  };
  render() {
    const { products, productDetails } = this.state;
    return (
      <div>
        <Productlist
          productsdata={products}
          getDetail={this.handleDetailProduct}
        />
        <Modal productsdata={products} getDetail={productDetails} />
      </div>
    );
  }
}
