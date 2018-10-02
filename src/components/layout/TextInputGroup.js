import React from 'react';
import {Button, Input, Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (<div class='field'>
    <label>{label}</label>
    <Input className={classnames({'is-invalid': error})} value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}/>
    {error && <div class='ui negative message' > <p>{error}</p> </div>}
  </div>);
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defualtProps = {
  type: 'text'
}

export default TextInputGroup
