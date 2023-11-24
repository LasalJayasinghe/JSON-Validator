// input-sections.ts
import { FormlyFieldConfig } from '@ngx-formly/core';

export const createInputField = ({
  key, 
  type,
  label,
  placeholder,
  description,
  required,
  pattern, //checkbox
  options, //dropdown or radio
}: {
  key: string;
  type: string;
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  pattern?: string; //checkbox
  options?: { value: any, label: string , disabled?:boolean}[]; //dropdown or radio
}): FormlyFieldConfig => {
  const field: FormlyFieldConfig = {
    key,
    type,
    templateOptions: {
      label,
      placeholder,
      description,
      required,
      pattern, //checkbox
      options, //dropdown or radio
    },
  };
  return field;
};
