// input-sections.ts
import { FormlyFieldConfig } from '@ngx-formly/core';

export const text2Section: FormlyFieldConfig = {
  key: 'text2',
  type: 'input',
  props: {
    label: 'Hey!',
    placeholder: 'This one is disabled if there is no text in the other input',
  },
  expressions: {
    'props.disabled': '!model.text',
  },
};

export const emailSection: FormlyFieldConfig = {
  key: 'email',
  type: 'input',
  props: {
    label: 'Email address',
    placeholder: 'Enter email',
    required: true,
  }
};

export const radioSection: FormlyFieldConfig = {
  key: 'Radio',
  type: 'radio',
  props: {
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


export const formGroups = [
  {
    userDetails: [
      firstNameSection,
      lastNameSection,
    ]
  },
  {
    otherDetails: [
      text2Section,
      emailSection,
      radioSection,
    ]
  },
];
