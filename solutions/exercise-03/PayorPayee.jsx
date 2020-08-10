import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { UserPropType } from './zippay-prop-types';
import { getUser } from './redux/users-slice';

function getDisplayNameOrId(user) {
  if (typeof user === 'object' && user !== null) {
    return user.displayName;
  } else if (typeof user === 'string' && user) {
    return user;
  } else {
    console.warn('Could not figure out what to display.');
  }
}

function PayorPayee(props) {
  const { payor, payee, toggleDisplay } = props;
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

const mapStateToProps = (state, ownProps) => {
  return {
    // Guaranteed to be an ID
    payor: getUser(state, ownProps.payor),
    payee: getUser(state, ownProps.payee),
  };
};

const mapDispatchToProps = () => ({
  toggleDisplay: null,
});

export const PayorPayeeRedux = connect(mapStateToProps, mapDispatchToProps)(PayorPayee);

export default PayorPayee;
