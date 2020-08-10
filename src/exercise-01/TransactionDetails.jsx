import React, { Component } from 'react';

/*
Build a TransactionDetails component.
Here is an example transaction:
  {
    id: '1',
    payorId: '101',
    payeeId: '213',
    amount: 92.07,
    txDate: '2019-09-01T21:21:15.030Z',
    txType: 'payment',
    txStatus: 'settled',
    reason: "dinner at Ruthie's BBQ",
    visibility: 'public',
    version: 1,
    lastUpdated: '2019-09-01T21:21:15.030Z',
    active: true,
  }

Start with PropTypes. You can either assign the PropTypes to the class,
or use the static property propTypes.

Notes on specific prop types
txDate can be a date or a string
txType can be 'payment' or 'charge'
txStatus can be 'settled' or 'open'
visibility can be 'public' or 'private'
lastUpdated can be a date or a string

The component is a presentational component and will be passed 
a "transaction" property

Render at least the following out of the transaction:
Amount
Reason
Date
Payor (as an ID, we will update this soon)
Payee (as an ID, we will update this soon)

*/

export default class TransactionDetails extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Placeholder</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Consider adding some rows here.</li>
        </ul>
      </div>
    );
  }
}
