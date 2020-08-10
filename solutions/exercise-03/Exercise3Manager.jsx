import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/create-store';
import { TransactionDetailsRedux } from './TransactionDetails';

export default class Exercise3Manager extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col">
            <TransactionDetailsRedux />
          </div>
        </div>
      </Provider>
    );
  }
}
