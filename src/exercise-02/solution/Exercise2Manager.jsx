import React, { Component } from 'react';
import { transactions, users } from '@speedingplanet/rest-server';
import TransactionDetails from './TransactionDetails';

export default class Exercise2Manager extends Component {
  constructor() {
    super();

    this.state = {
      demoTransaction: transactions[0],
    };
  }

  handleToggleDisplay = (value) => {
    console.log('Exercise2Manager.handleToggleDisplay: ', value, typeof value);
    if (typeof value === 'string') {
      let target;
      if (this.state.demoTransaction.payeeId === value) {
        target = 'payee';
      } else if (this.state.demoTransaction.payorId === value) {
        target = 'payor';
      }

      this.setState({
        demoTransaction: {
          ...this.state.demoTransaction,
          [target]: users.find((user) => user.id === value),
        },
      });
    } else if (typeof value === 'object' && value !== null) {
      let target;
      if (this.state.demoTransaction.payee === value) {
        target = 'payee';
      } else if (this.state.demoTransaction.payor === value) {
        target = 'payor';
      }

      delete this.state.demoTransaction[target];
      this.setState({
        demoTransaction: this.state.demoTransaction,
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <TransactionDetails
            transaction={this.state.demoTransaction}
            toggleDisplay={this.handleToggleDisplay}
          />
        </div>
      </div>
    );
  }
}
