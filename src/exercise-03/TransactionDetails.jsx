import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransactionPropType } from './zippay-prop-types';
import { PayorPayee } from './PayorPayee';

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

/*
  Create a functional component, TransactionDetailsRedux
  It should take one property, a transaction
  If transaction is defined, return TransactionDetails, passing it the transaction
  If transaction is NOT defined, return AtomSpinner (or similar) from 'redux-epic-spinners'
*/

/*
  Define mapStateToProps for TransactionDetailsRedux.
  Remember it expects a transaction, and you have a selector for that.

  Then use connect() from react-redux to connect mapStateToProps 
  to TransactionDetailsRedux. Re-assign the return of connect()() to 
  TransactionDetailsRedux and export it.

  After you finish work in PayorPayee.jsx, update the import at the top
  of this file to impor PayorPayeeRedux as PayorPayee, so we do not have to
  change code in TransactionDetails itself
  
*/
