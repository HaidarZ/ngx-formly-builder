import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent {

  activeView$: BehaviorSubject<string> = new BehaviorSubject('field-type-list');

  constructor(private eRef: ElementRef, private fb: FormBuilderService) {
    this.fb.activeFormField$.subscribe((formField) => {
      if (formField) {
        this.activeView$.next('field-type-config');
      } else {
        this.activeView$.next('field-type-list');
      }
    });
  }

  @HostListener('document:click', ['$event'])
  clickOutsidePanel(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.fb.deactivateFormField();
    }
  }

}
