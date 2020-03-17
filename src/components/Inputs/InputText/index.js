import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
const SearchIcon = process.env.PUBLIC_URL + '/icon-svg/search.svg';

const InputText = ({name = '', value = '', placeholder = '', onChange}) => {

    return (
     <>
        <input
            name={name}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            style={{ backgroundImage: `url(${SearchIcon})` }}
        />
     </>
    );
}


InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputText;
