import { ApplicationRef, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-field-type-config',
  templateUrl: './field-type-config.component.html',
  styleUrls: ['./field-type-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldTypeConfigComponent implements OnInit, OnDestroy {

  form: any;
  destroy$ = new Subject();

  constructor(private fb: FormBuilder, private fbs: FormBuilderService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id:[''],
      'templateOptions': this.fb.group({
        'label': [''],
        'placeholder': [''],
        'description': [''],
        'disabled': [''],
        'required': ['']
      })
    });

    this.fbs.activeFormField$.pipe(takeUntil(this.destroy$)).subscribe((formField) => {

      this.form.valueChanges.pipe(
        debounceTime(200),
      ).subscribe((val: any) => {
        // respond to changes and patch the original field to reflect the new configuration
        const field = formField.field;
        Object.assign(field.templateOptions, val.templateOptions);
        field.id = val.id;
      });

      if (formField) {
        // initialize the form
        this.form.patchValue(formField?.field, { emitEvent: false });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

}
