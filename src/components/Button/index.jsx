import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Button = ({id, type, title, onClick}) => {
  return (
    <Fragment>
      <button onClick={onClick} id={id} type={type} title={title} className="input-group-text">add</button>
    </Fragment>
  )
}

Button.defaultProps = {
  children: "add",
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
export default Button