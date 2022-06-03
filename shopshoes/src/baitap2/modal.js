import React, { Component } from "react";

export default class Modal extends Component {
  renderProductDetails = () => {
    const { getDetail } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={getDetail.image} alt="" />
        <div className="card-body">
          <span className="card-title">Product Name:</span>
          <span className="card-title">{getDetail.name}</span>
          <p className="card-text">Product Description:</p>
          <p className="card-text">{getDetail.description}</p>
          <span className="card-text">Product Quantity: </span>
          <span className="card-text">{getDetail.quantity} Sku</span>
          <p className="card-text">{getDetail.price} $</p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Product Detail</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">{this.renderProductDetails()}</div>
          </div>
        </div>
      </div>
    );
  }
}
