import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';

const Range = ({field_id, field_label , field_value}) => {
  const {handleChange}  = useContext(FormContext) 
    return (
        <div className="mb-3 form-check">
            <input type="range" className="form-range" id={field_id}                        
             checked = {field_value}
             onChange =  {event => handleChange(field_id, event)}/>
            <label htmlFor="customRange1" className="form-label">{field_label}</label>
        </div>
    )
}

export default Range