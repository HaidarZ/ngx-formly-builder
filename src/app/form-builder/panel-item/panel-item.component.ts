import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel-item',
  templateUrl: './panel-item.component.html',
  styleUrls: ['./panel-item.component.scss']
})
export class PanelItemComponent implements OnInit {

  @Input() title!: string;
  @Input() icon!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
