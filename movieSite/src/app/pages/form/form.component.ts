import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { formGroups } from './form-fields';


interface MyModel {
  text: string;
  email: string;
  Radio: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
  form = new FormGroup({});
  model: MyModel = {
    text: '',
    email: '',
    Radio: 0,
    firstName: '',
    lastName: '',
  };
  fields =  formGroups
    .flatMap(group => group.otherDetails)
    .filter((field): field is FormlyFieldConfig => !!field); // Use a type assertion to filter out undefined values

  onSubmit(model: MyModel) {
    console.log(model);
  }
}