import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { formGroups } from '../form-fields';

interface MyModel {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  form = new FormGroup({});
  model: MyModel = {
    firstName: '',
    lastName: '',
  };

  fields =  formGroups
    .flatMap(group => group.userDetails)
    .filter((field): field is FormlyFieldConfig => !!field); // Use a type assertion to filter out undefined values

  onSubmit(model: MyModel) {
    console.log(model);
  }
}