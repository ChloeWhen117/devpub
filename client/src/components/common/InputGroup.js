import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  type,
  icon,
  iconlabel,
  onChange
}) => {
  return (
    <div>
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className ={icon} /> {iconlabel}
        </span>
      </div>
      <textarea
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconlabel: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

InputGroup.defaultProps = {
  type: 'text' 
}

export default InputGroup;