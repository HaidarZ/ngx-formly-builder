import {Component, Input} from '@angular/core';
import {FormBuilderService} from '../form-builder.service';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
})
export class FormItemComponent {

  field: any;
  _formField: any;

  @Input()
  set formField(formField: any) {
    if (formField) {
      this.field = JSON.parse(JSON.stringify(formField.field)); // a hack to create a deep copy without references
      this._formField = formField;
    }
  }

  constructor(private fb: FormBuilderService) {
  }

  get active() {
    return this._formField?.active;
  }

  activate($event: any) {
    $event.stopPropagation(); // do not allow to propagate which triggers click out event
    this.fb.activateFormField(this._formField);
  }

  removeItem() {
    return this.fb.removeItem(this._formField);
  }

}
