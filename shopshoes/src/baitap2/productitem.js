import React, { Component } from "react";

export default class Productitem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-4">
        <div className="card my-3">
          <img className="card-img-top" src={product.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <p className="card-text">{product.price} $</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-dark">
                Add to cart <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#myModal"
                onClick={() => {
                  this.props.getDetail(product);
                }}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
