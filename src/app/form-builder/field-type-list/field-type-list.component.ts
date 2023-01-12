import { CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-field-type-list',
  templateUrl: './field-type-list.component.html',
  styleUrls: ['./field-type-list.component.scss']
})
export class FieldTypeListComponent {

  constructor(private formBuilder: FormBuilderService) {
  }

  get fields() {
    return this.formBuilder.fieldTypes;
  }

  drop($event: any) {
    this.formBuilder.drop($event)
  }

  noReturnPredicate() {
    return false
  }

  onSourceListExited(event: CdkDragExit<any>) {
    this.formBuilder.fieldTypes.splice(
      this.formBuilder.fieldTypes.indexOf(event.item.data) + 1,
      0,
      {...event.item.data, temp: true}
    );
  }

  onSourceListEntered($event: CdkDragEnter<any>) {
    this.formBuilder.removeTempFields();
  }
}
