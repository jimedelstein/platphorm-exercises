import React from 'react';
import TransactionDetails from './TransactionDetails';
import { render } from '@testing-library/react';

describe('Transaction Details tests', () => {
  let transaction, payee, payor;

  beforeEach(() => {
    transaction = {
      id: '14',
      payorId: '114',
      payeeId: '211',
      amount: 13.33,
      txDate: '2020-05-10T04:27:57.869Z',
      txType: 'payment',
      txStatus: 'settled',
      reason: 'gauntlet disposal',
      visibility: 'public',
      version: 1,
      lastUpdated: '2020-05-10T04:27:57.869Z',
      active: true,
    };

    payor = {
      displayName: 'Goodman, Lieber, Kurtzberg, Holliway',
      payeeId: 'MARVEL$114',
      email: 'stan@theman.com',
      userType: 'corporation',
      picture: {
        large: 'https://randomuser.me/api/portraits/lego/1.jpg',
        medium: 'https://randomuser.me/api/portraits/med/lego/1.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
      },
      address: {
        street: '16 W 12 St.',
        city: 'New York',
        state: 'NY',
        postalCode: '10015',
        country: 'USA',
      },
      id: '114',
      version: 1,
      lastUpdated: '2020-05-07T19:31:42.232Z',
      active: true,
    };

    payee = {
      displayName: 'Yoyodyne Propulsion Systems',
      payeeId: 'BUCKAROO$113',
      email: 'john-oconnor@yoyodyne.com',
      userType: 'corporation',
      picture: {
        large: 'https://randomuser.me/api/portraits/lego/1.jpg',
        medium: 'https://randomuser.me/api/portraits/med/lego/1.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
      },
      address: {
        street: '16 Blue Blazer Way',
        city: "Grover's Mill",
        state: 'NJ',
        postalCode: '08550',
        country: 'USA',
      },
      id: '113',
      version: 1,
      lastUpdated: '2020-05-07T19:31:42.232Z',
      active: true,
    };
  });

  test('should render a Payor and a Payee, ids only', () => {
    const { getByText } = render(<TransactionDetails transaction={transaction} />);
    const payor = getByText(new RegExp('Payor'));
    const payee = getByText(new RegExp('Payee'));

    expect(payor.textContent).toMatch(new RegExp(transaction.payorId));
    expect(payee.textContent).toMatch(new RegExp(transaction.payeeId));
  });

  it('should render a Payor and a Payee, as objects', () => {
    let testTransaction = { ...transaction, payor, payee };
    const { getByText } = render(<TransactionDetails transaction={testTransaction} />);
    const payorElement = getByText(new RegExp('Payor'));
    const payeeElement = getByText(new RegExp('Payee'));

    expect(payorElement.textContent).toMatch(new RegExp(payor.displayName));
    expect(payeeElement.textContent).toMatch(new RegExp(payee.displayName));
  });
});
