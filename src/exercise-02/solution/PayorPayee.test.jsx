import React from 'react';
import { render } from '@testing-library/react';
import PayorPayee from './PayorPayee';

describe('PayorPayee tests', () => {
  let payor = {
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

  let payee = {
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

  test('should render a payorId', () => {
    const { getByText } = render(<PayorPayee payor="14" />);

    // This is a test, because it will throw an error if it can't find 'Payor'
    const item = getByText(/Payor/);
    expect(item.textContent).toMatch(/14/);
  });

  test('should render a payeeId', () => {
    const { getByText } = render(<PayorPayee payee="15" />);

    // This is a test, because it will throw an error if it can't find 'Payor'
    const item = getByText(/Payee/);
    expect(item.textContent).toMatch(/15/);
  });

  test('should render a payor', () => {
    const { getByText } = render(<PayorPayee payor={payor} />);
    const item = getByText(/Payor/);
    expect(item.textContent).toMatch(new RegExp(payor.displayName));
    expect(item.textContent).not.toMatch(payor.id);
  });

  test('should render a payee', () => {
    const { getByText } = render(<PayorPayee payee={payee} />);
    const item = getByText(/Payee/);
    expect(item.textContent).toMatch(new RegExp(payee.displayName));
    expect(item.textContent).not.toMatch(payee.id);
  });
});
