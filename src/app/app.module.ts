import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {PanelItemComponent} from './form-builder/panel-item/panel-item.component';
import {PanelComponent} from './form-builder/panel/panel.component';
import { FormContainerComponent } from './form-builder/form-container/form-container.component';
import { FormItemComponent } from './form-builder/form-item/form-item.component';
import { FieldTypeListComponent } from './form-builder/field-type-list/field-type-list.component';
import { FieldTypeConfigComponent } from './form-builder/field-type-config/field-type-config.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    PanelComponent,
    PanelItemComponent,
    FormContainerComponent,
    FormItemComponent,
    FieldTypeListComponent,
    FieldTypeConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule,
    MaterialModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({extras: {lazyRender: true}}),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
