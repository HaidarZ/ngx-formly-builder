import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {

  constructor(private fb: FormBuilderService) { }

  get formFields() {
    return this.fb.formFields;
  }

  drop($event: any) {
    return this.fb.drop($event);
  }
}
