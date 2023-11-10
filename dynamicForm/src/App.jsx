import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import schema from './formElement.json';
import Element from './component/Element';
import {FormContext} from './FormContext';

const App = () => {
  const [elements, setElements] = useState(null);
  useEffect(() =>{
  setElements(schema[0])
}, [])
  const {fields , page_label} = elements ?? {};

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(elements)
  }

  const handleChange = (id, event ) =>{
    const newElements = { ...elements}
    newElements.fields.forEach(field => {
      const { field_type, field_id} = field;
      if ( id === field_id){
        switch(field_type){
          case 'checkbox' : 
            field['field_value'] = event.target.checked;
            break;
          
          default:
            field['field_value'] = event.target.value;
            break;
        }
      }
      setElements(newElements)
    });
    console.log('elements')
  }

  return (
    <FormContext.Provider value = { { handleChange } }>
    <div className="mt-5 App container">
    <h2 className="text-center">{page_label}</h2>
       <form >
        {fields ? fields.map((field,i)=> <Element key={i} field = {field} />) : null}
        
        <button onClick ={(e)=> handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </FormContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
