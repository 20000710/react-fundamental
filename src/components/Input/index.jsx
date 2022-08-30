import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Input = ({type, value, name, id, placeholder, onChange}) => {
  return (
    <Fragment>
      <input type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} className='form-control'/>  
    </Fragment>
  )
}

Input.defaultProps = {
  placeholder: 'Product',
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input