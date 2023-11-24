import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { createInputField } from '../form-fields';

interface MyModel {}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  form = new FormGroup({});
  model: MyModel = {};

firstName: FormlyFieldConfig = createInputField({
    key : 'fname',
    type : 'input',
    label : 'First Name',
    placeholder :'Enter your first name',
    required : true
  }
  );

lastName: FormlyFieldConfig = createInputField({   
  key :  'lName',
  type :  'input',
  label :   'Last Name',
  placeholder :   'Enter your Last name',
  required :  true
  }
  );

checkbox: FormlyFieldConfig = createInputField({   
  key: 'Checkbox',
  type: 'checkbox',
    label: 'Accept terms',
    description: 'In order to proceed, please accept terms',
    pattern: '',
    required: true,
  }
  );
  
dropdownField : FormlyFieldConfig =  createInputField({
    key: 'dropdownField',
    type: 'select',
    label: 'Dropdown Field',
    placeholder : 'select vale',
    options: [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      // Add more options as needed
    ],
  }
  );

radio : FormlyFieldConfig = createInputField({
  key: 'Radio',
  type: 'radio',
  label: 'Radio',
    placeholder: 'Placeholder',
    description: 'Description',
    required: true,
    options: [
      { value: 1, label: 'Option 1' },
      { value: 2, label: 'Option 2' },
      { value: 3, label: 'Option 3' },
      { value: 4, label: 'Option 4', disabled: true },
    ],
})
    

formGroups: FormlyFieldConfig[] = [
  this.firstName,
  this.lastName,
  this.checkbox,
  this.dropdownField,
  this.radio,
];

  fields: FormlyFieldConfig[] = this.formGroups;

  onSubmit(model: MyModel) {
    console.log(model);
  }
}