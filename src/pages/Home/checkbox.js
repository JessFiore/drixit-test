import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ type = 'checkbox', value, checked = false, handleChange }) => (
  <input type={type} value={value} checked={checked} onChange={handleChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;