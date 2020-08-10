import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TransactionDetails extends Component {
  static propTypes = {
    transaction: {
      id: PropTypes.string,
      payorId: PropTypes.string,
      payeeId: PropTypes.string,
      amount: PropTypes.number,
      txDate: PropTypes.oneOfType([Date, PropTypes.string]),
      txType: PropTypes.oneOf(["payment", "charge"]),
      txStatus: PropTypes.oneOf(["settled", "open"]),
      reason: PropTypes.string,
      visibility: PropTypes.oneOf(["public", "private"]),
      version: PropTypes.number,
      lastUpdated: PropTypes.oneOfType([Date, PropTypes.string]),
      active: PropTypes.bool,
    },
  };

  render() {
    const { payorId, payeeId, amount, txDate, reason } = this.props.transaction;

    return (
      <div className="card">
        <div className="card-header">
          {amount} for {reason}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Amount: {amount}</li>
          <li className="list-group-item">Why? {reason}</li>
          <li className="list-group-item">When {txDate}</li>
          <li className="list-group-item">Payor: {payorId}</li>
          <li className="list-group-item">Payee: {payeeId}</li>
        </ul>
      </div>
    );
  }
}
