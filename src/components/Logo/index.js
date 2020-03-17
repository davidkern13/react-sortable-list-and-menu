import React from 'react';
import PropTypes from 'prop-types';
const Logo = ({ logoText }) => (<p>{logoText}</p>);

Logo.propTypes = {
  logoText: PropTypes.string.isRequired,
}

export default Logo;