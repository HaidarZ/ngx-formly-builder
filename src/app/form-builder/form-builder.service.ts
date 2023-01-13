import {Injectable} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {BehaviorSubject} from 'rxjs';
import {FieldType} from './types/field-type.type';

@Injectable()
export class FormBuilderService {

  fieldTypes: FieldType[] = [
    {
      title: 'Input',
      icon: 'title',
      config: {
        type: 'input',
        templateOptions: {
          label: 'Input',
          placeholder: 'Placeholder',
          description: 'Description',
        }
      }
    },
    {
      title: 'Textarea',
      icon: 'notes',
      config: {
        type: 'textarea',
        templateOptions: {
          label: 'Textarea',
          placeholder: 'Placeholder',
          description: 'Description',
        },
      }
    },
    {
      title: 'Checkbox',
      icon: 'check_box',
      config: {
        type: 'checkbox',
        templateOptions: {
          label: 'Accept terms',
        },
      }
    }
  ]

  formFields: any[] = [];

  activeFormField$: BehaviorSubject<any> = new BehaviorSubject(null);

  counter = 0;

  constructor() {
    this.loadFormFields();
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      // case changing the order
      moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
    } else {
      // dropping new item
      const field = {
        id: `field_${++this.counter}`,
        ...event.item.data.config,
      };
      // this.formlyBuilder.build(field);
      let itemData: any = {
        field: field
      };
      // insert at specific index where the item is dropped
      const insertIndex = event.currentIndex;
      this.formFields.splice(insertIndex, 0, itemData);

      // mark the item as active in order to configure it
      this.formFields.map(i => delete i.active); // deactivate previous items
      itemData.active = true;
      this.activeFormField$.next(itemData);
    }
    this.persistFormFields();
    this.removeTempFields();
  }


  persistFormFields() {
    sessionStorage.setItem("formFields", JSON.stringify(this.formFields));
  }

  loadFormFields() {
    let formFields = sessionStorage.getItem('formFields');
    if (formFields && formFields.length) {
      this.formFields = JSON.parse(formFields);
    }
  }

  removeItem(item: any) {
    this.formFields = [...this.formFields.filter(i => i !== item)];
    this.persistFormFields();
  }

  removeTempFields() {
    this.fieldTypes = [...this.fieldTypes.filter(i => !i?.['temp'])];
  }

  activateFormField(formField: any) {
    this.formFields.map(i => delete i.active); // deactivate all
    formField.active = true;
    this.activeFormField$.next(formField);
  }

  deactivateFormField() {
    this.formFields.map(i => delete i.active); // deactivate all
    this.activeFormField$.next(null);
  }
}
