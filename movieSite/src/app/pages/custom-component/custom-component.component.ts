import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css'],
})
export class InputFieldType extends FieldType<FieldTypeConfig> {}

