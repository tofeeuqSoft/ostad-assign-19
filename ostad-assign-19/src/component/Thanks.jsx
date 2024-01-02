import React from "react";

const Thanks = () => {
  return (
    <div className="container">
      <div className="text-center p-4">
        <img src="/src/assets/images/cmpted_logo.webp" alt="" />
        <p className="mt-3">
          Thank you for ordering in our store. You will receive a confirmation
          email shortly.
        </p>
        <button className="btn btn-primary fs-6 p-3 mt-3">
          Continue Shopping
        </button>
      </div>
      <div className="text-center mt-4">
        <h2>Call Us for Quick Order</h2>
        <h3 className="text-danger">012 123 152</h3>
      </div>
    </div>
  );
};

export default Thanks;
