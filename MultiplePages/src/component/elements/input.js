import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';

const Input = ({field_id, field_label , field_placeholder, field_value}) => {
  const {handleChange}  = useContext(FormContext) 
  return (
        <div className="mb-3">
          <label htmlFor={field_id} className="form-label">{field_label}</label>
          <input type="text" className="form-control" id={field_id}  aria-describedby="emailHelp"
           placeholder = {field_placeholder ? field_placeholder : ''}
           value = {field_value} 
           onChange =  {event => handleChange(field_id, event)}
          />
        </div>
    )
}

export default Input 