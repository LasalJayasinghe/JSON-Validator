import {FormlyFieldConfig} from '@ngx-formly/core';
import { createInputField } from './form-fields';

export const FirstName: FormlyFieldConfig = createInputField({
    key : 'fname',
    type : 'input',
    label : 'First Name',
    placeholder :'Enter your first name',
    required : true
  }
  );

export const LastName: FormlyFieldConfig = createInputField({   
    key :  'lName',
    type :  'input',
    label :   'Last Name',
    placeholder :   'Enter your Last name',
    required :  true
    }
    );

export const Email: FormlyFieldConfig = createInputField({   
    key :  'email',
    type :  'input',
    label :   'Email',
    placeholder :   'Enter your email',
    required :  true
    }
    );


export const Address: FormlyFieldConfig = createInputField({   
    key :  'address',
    type :  'textarea',
    label :   'Address',
    placeholder :   'Enter your address',
    required :  true
    }
    );

export const Gender : FormlyFieldConfig = createInputField({
    key: 'gender',
    type: 'radio',
    label: 'Gender',
        placeholder: '1',
        description: 'Select Your Gender',
        required: true,
        options: [
        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' },
        { value: 3, label: 'Other' },
        ],
    });


export const Nationality : FormlyFieldConfig =  createInputField({
    key: 'nationality',
    type: 'select',
    label: 'Nationality',
    placeholder : 'select your nationality',
    options: [
        { value: 1, label: 'American' },
        { value: 2, label: 'Asian' },
        { value: 3, label: 'British' },
        { value: 4, label: 'Indian' },
    ],
    }
    );

