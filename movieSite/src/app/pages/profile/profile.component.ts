import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { createInputField } from '../form-fields';
import { FirstName, LastName, Email, Address, Gender, Nationality} from '../formStructures'

interface MyModel {}

@Component({
  selector: 'app-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  form = new FormGroup({});
  model: MyModel = {
    fname: 'Peporona',
    lName: 'Jackson',
    gender: 2,
    nationality : 1,
    email : "peter@email.com",
    address : "Park Street, Colorado",
    bio : "Cup of coffe for you!!",
  };

  Bio: FormlyFieldConfig = createInputField({   
    key :  'bio',
    type :  'textarea',
    label :   'Bio',
    placeholder :   'Enter about yourself',
    required :  false
    }
    );
  
    formGroups : FormlyFieldConfig[] = [
      FirstName,
      LastName,
      Gender,
      Address, 
      Email,
      Nationality,
      this.Bio,
    ]

    fields: FormlyFieldConfig[] = this.formGroups;

  onSubmit(model: MyModel) {
    console.log(model);
  }

  resetForm() {
    this.form.reset();
  }

}