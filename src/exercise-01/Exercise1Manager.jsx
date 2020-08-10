import React, { Component } from 'react';
import { transactions } from '@speedingplanet/rest-server';
import TransactionDetails from './TransactionDetails';

export default class Exercise1Manager extends Component {
  render() {
    return <TransactionDetails transaction={transactions[0]} />;
  }
}
