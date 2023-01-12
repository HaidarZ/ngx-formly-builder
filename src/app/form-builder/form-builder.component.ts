import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from './form-builder.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  providers: [FormBuilderService]
})
export class FormBuilderComponent implements OnInit {


  constructor(private fb: FormBuilderService) {
  }

  ngOnInit() {
  }

  get schemaFields() {
    return this.fb.formFields;
  }

}
