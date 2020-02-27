import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ type = 'checkbox', value, checked = false, onChange }) => (
  <input type={type} value={value} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;
