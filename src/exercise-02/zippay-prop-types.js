import PropTypes from 'prop-types';

/*
Add prop types for the following in the following order
(Creating from smaller pieces into bigger ones)
PicturePropType:
  large: string / required
  medium: string / required
  thumbnail: string / required

AddressPropType:
  street: string / required
  city: string / required
  state: string / required
  postalCode: string / required
  country: string

UserPropType:
  displayName: string / required
  payeeId: string / required
  email: string / required
  userType: either 'corporation' or 'person' / required
  picture: PicturePropType
  address: AddressPropType / required
  id: string / required
  version: number / required
  lastUpdate: date or string / required
  active: boolean

Add two optional types to TransactionPropType:
payor: UserPropType
payee: UserPropType

Don't forget to export all of the above PropTypes
*/

export const TransactionPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  payorId: PropTypes.string.isRequired,
  payeeId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  txDate: PropTypes.oneOfType([Date, PropTypes.string]).isRequired,
  txType: PropTypes.oneOf(['payment', 'charge']).isRequired,
  txStatus: PropTypes.oneOf(['settled', 'open']).isRequired,
  reason: PropTypes.string.isRequired,
  visibility: PropTypes.oneOf(['public', 'private']).isRequired,
  version: PropTypes.number.isRequired,
  lastUpdated: PropTypes.oneOfType([Date, PropTypes.string]).isRequired,
  active: PropTypes.bool.isRequired,
});
