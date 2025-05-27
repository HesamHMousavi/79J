import React from "react";
import "./PaymentFailed.css";

const PaymentRequired = ({ onPayNow }) => {
  return (
    <div className="payment-required-container">
      <h2 className="payment-title">Payment Required</h2>
      <p className="payment-message">
        You haven’t completed your payment. Please complete your purchase to
        access this website.
      </p>
    </div>
  );
};

export default PaymentRequired;
