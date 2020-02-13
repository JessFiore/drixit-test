import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ type = 'checkbox', value, checked = false, onChange }) => (
  <input type={type} value={value} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;