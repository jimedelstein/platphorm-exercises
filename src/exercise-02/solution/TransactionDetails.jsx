import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransactionPropType } from './zippay-prop-types';
import PayorPayee from './PayorPayee';

export default class TransactionDetails extends Component {
  static propTypes = {
    transaction: TransactionPropType,
    toggleDisplay: PropTypes.func,
  };

  render() {
    const {
      payorId,
      payeeId,
      payor,
      payee,
      amount,
      txDate,
      reason,
    } = this.props.transaction;

    return (
      <div className="card">
        <div className="card-header">
          {amount} for {reason}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Amount: {amount}</li>
          <li className="list-group-item">Why? {reason}</li>
          <li className="list-group-item">When {txDate}</li>
          <PayorPayee payor={payor ?? payorId} toggleDisplay={this.props.toggleDisplay} />
          <PayorPayee payee={payee ?? payeeId} toggleDisplay={this.props.toggleDisplay} />
        </ul>
      </div>
    );
  }
}
