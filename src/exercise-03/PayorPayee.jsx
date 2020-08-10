import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { UserPropType } from './zippay-prop-types';

function getDisplayNameOrId(user) {
  if (typeof user === 'object' && user !== null) {
    return user.displayName;
  } else if (typeof user === 'string' && user) {
    return user;
  } else {
    console.warn('Could not figure out what to display.');
  }
}

function PayorPayee({ payor, payee, toggleDisplay }) {
  let label = '',
    value = null;

  if (payor) {
    label = 'Payor';
    value = payor;
  } else if (payee) {
    label = 'Payee';
    value = payee;
  } else {
    console.error('PayorPayee: You should pass either a payor or payee proptery.');
    return '';
  }

  const classes = classnames({
    'list-group-item': true,
    clickable: toggleDisplay,
  });

  return (
    <li className={classes} onClick={() => toggleDisplay(value)}>
      {label}: {getDisplayNameOrId(value)}
    </li>
  );
}

PayorPayee.propTypes = {
  payor: PropTypes.oneOfType([UserPropType, PropTypes.string]),
  payee: PropTypes.oneOfType([UserPropType, PropTypes.string]),
  toggleDisplay: PropTypes.func,
};

export default PayorPayee;

/*
  Write a mapSstateToProps for PayorPayee. Remember that you have a selector
  getUser() available to fetch a user based on a user id (supplied by the payor
  or payee property)

  Write a mapDispatchToProps where toggleDisplay is null. Now that we have 
  the displayName of the payor and payee, we don't need to toggle values 

  Call connect() on PayorPayee, and export it as PayorPayeeRedux
*/
