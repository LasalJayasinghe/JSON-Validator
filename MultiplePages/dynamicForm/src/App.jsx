import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import schema from './formElement.json';
import Element from './component/Element';
import merge from 'lodash/merge';

import {FormContext} from './FormContext';

const App = () => {
  const [elements, setElements] = useState(null);
  const [data, setData ] = useState(null);
  const [activePage, setActivePage] = useState(0);


  useEffect(() => {
    setElements(schema[activePage]);
  }, [activePage]);

  const { fields , page_label} = elements ?? {};

  const handleSubmit =() =>{
    // event.preventDefault();
    console.log(elements);
    console.log(data)
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;
  
          default:
            field['field_value'] = event.target.value;
            break;
        }
      }
    });
  
    setElements(newElements); // Move this line outside of the loop
    console.log('elements', elements);
  };
  

  const goToNextPage = () => {
    setActivePage((prevPage) => prevPage + 1);
  
    if (data) {
      setData((prevData) => ({ ...prevData, ...elements }));

    } else {
      setData(elements);
    }
    };
  
  // const goToPreviousPage = () => {
  //   setActivePage((prevPage) => prevPage - 1);
  // };

  return (
    <FormContext.Provider value = { { handleChange } }>
    <div className="m-5 App container">
    <h2 className="text-center">{page_label}</h2>
       <form >
        {fields ? fields.map((field,i)=> <Element key={i} field = {field} />) : null}
        
        {/* {activePage > 0 && (
            <button type="button" onClick={goToPreviousPage} className="btn btn-secondary">
              Previous
            </button>
          )} */}

          {activePage < schema.length - 1 ? (
            <button type="button" onClick={goToNextPage} className="btn btn-primary">
              Next
            </button>
          ) : (
            <div onClick={handleSubmit} type="submit" className="btn btn-primary ">
              Submit
            </div>
          )}
      </form>
    </div>
    </FormContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
