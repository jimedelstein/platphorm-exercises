import PropTypes from 'prop-types';

export const PicturePropType = PropTypes.shape({
  large: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
});

export const AddressPropType = PropTypes.shape({
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  country: PropTypes.string,
});

export const UserPropType = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  payeeId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userType: PropTypes.oneOf(['corporation', 'person']).isRequired,
  picture: PicturePropType,
  address: AddressPropType.isRequired,
  id: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
  lastUpdated: PropTypes.oneOfType([PropTypes.string, Date]).isRequired,
  active: PropTypes.bool.isRequired,
});

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
  payor: UserPropType,
  payee: UserPropType,
});
