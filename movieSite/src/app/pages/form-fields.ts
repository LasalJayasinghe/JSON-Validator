// input-sections.ts
import { Form } from '@angular/forms';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';
import { first } from 'rxjs';

export const email: FormlyFieldConfig = {
  key: 'email',
  type: 'input',
  props: {
    label: 'Email address',
    placeholder: 'Enter email',
    required: true,
  }
};

// name-sections.ts

export const firstNameSection: FormlyFieldConfig = {
  key: 'firstName',
  type: 'input',
  props: {
    label: 'First Name',
    placeholder: 'Enter Your name!',
    required: true,
  },
};

export const lastNameSection: FormlyFieldConfig = {
  key: 'lastName',
  type: 'input',
  props: {
    label: 'Last Name',
    placeholder: 'Enter Your name!',
    required: true,
  },
};

export const gender : FormlyFieldConfig = {
  key: 'gender',
  type: 'radio',
  props: {
    label: 'Gender',
    placeholder: 'Placeholder',
    description: 'Select Your Gender',
    required: true,
    options: [
      { value: 1, label: 'Male' },
      { value: 2, label: 'Female' },
      { value: 3, label: 'Other' }
    ],
  },
}

export const nationality : FormlyFieldConfig = {
  key: 'nationality',
      type: 'select',
      props: {
        label: 'Nationality',
        placeholder: 'Placeholder',
        description: 'Select Your Nationality',
        required: true,
        options: [
          { value: 1, label: 'British' },
          { value: 2, label: 'American' },
          { value: 3, label: 'Asian' },
          { value: 4, label: 'African'}
        ],
      },
    }


export const address : FormlyFieldConfig = {
  key: 'address',
  type: 'textarea',
  props: {
    label: 'Address',
    placeholder: 'Enter Your Address',
    description: 'Your current home address',
    required: true,
  },
}

export const name: FormlyFieldConfig = {
  fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'firstName',
          props: {
            label: 'First Name',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'lastName',
          props: {
            label: 'Last Name',
          },
        },
      ],
}


////-------------------------------------------------------------------------------
export const formGroups = [
  {
    userDetails: [
      name,
      gender,
      nationality,
      email,
      address,
    ]
  },
  {
    otherDetails: [
      firstNameSection,
      lastNameSection,


    ]
  },
];
