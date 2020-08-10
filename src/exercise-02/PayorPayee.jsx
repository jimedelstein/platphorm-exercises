import React from 'react';

/* eslint-disable-next-line */
function getDisplayNameOrId(user) {
  if (typeof user === 'object' && user !== null) {
    return user.displayName;
  } else if (typeof user === 'string' && user) {
    return user;
  } else {
    console.warn('Could not figure out what to display.');
  }
}

/*

Fill in the PayorPayee component. Start with the PropTypes
- payor: either a UserPropType or a string (which would be a payorId)
- payee: either a UserPropType or a string (which would be a payeeId)
- toggleDisplay: Function

This component will receive EITHER a payor or a payee. Not both, not neither.
There's no easy way to express this in PropTypes.

The payor will be either a payorId or a person.
The payee will be either a payeeId or a person.

Return
a list item with the class 'list-group-item' on it
The value should be either
<li>Payor: 114</li>
or
<li>Payor: Shop-Rite Groceries</li>

But could also be
<li>Payee: 115</li>
or
<li>Payee: Bob Dobalina</li>

Think of the <li> as having the format <li>{label}: {value}<li>
label is determined by whether there was a payor or a payee property defined
value is either the id or the object
You can use getDisplayNameOrId() above to figure out which to use

Finally, add an onClick event handler that invokes toggleDisplay, passing back
the payor or payee value

*/

function PayorPayee({ payor, payee, toggleDisplay }) {
  return <li>Placeholder</li>;
}

export default PayorPayee;
