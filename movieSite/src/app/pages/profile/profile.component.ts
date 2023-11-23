import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { formGroups } from '../form-fields';

interface MyModel {
  firstName: string;
  lastName: string;
  gender: number; 
  nationality: number;
  email : string;
  address : string;
}

@Component({
  selector: 'app-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  form = new FormGroup({});
  model: MyModel = {
    firstName: 'Peter',
    lastName: 'Jackson',
    gender: 1,
    nationality : 1,
    email : "peter@email.com",
    address : "Park Street, Colorado"
  };

  fields =  formGroups
    .flatMap(group => group.userDetails)
    .filter((field): field is FormlyFieldConfig => !!field); // Use a type assertion to filter out undefined values

  onSubmit(model: MyModel) {
    console.log(model);
  }

  resetForm() {
    this.form.reset();
  }

}