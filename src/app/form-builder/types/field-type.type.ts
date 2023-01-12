import {FormlyFieldConfig} from '@ngx-formly/core';

export interface FieldType {
  title: string;
  icon: string;
  config: FormlyFieldConfig;

  [key: string]: any;
}
