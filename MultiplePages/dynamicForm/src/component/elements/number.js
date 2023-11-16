import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';

const Number = ({field_id, field_label , field_placeholder, field_value}) => {
  const {handleChange}  = useContext(FormContext) 
  return (
        <div className="mb-3">
          <label htmlFor={field_id} className="form-label">{field_label}</label>
          <input type="number" className="form-control" id={field_id}  aria-describedby="emailHelp"
          placeholder = {field_placeholder ? field_placeholder : ''}
          value = {field_value} 
          onChange =  {event => handleChange(field_id, event)}
          />
        </div>
    )
}

export default Number 