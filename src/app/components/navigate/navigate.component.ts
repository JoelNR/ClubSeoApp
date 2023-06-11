import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss'],
})
export class NavigateComponent extends CapacitorBase implements OnInit {
  @Input() label: string
  @Input() icon: string
  @Input() url: string

  constructor() { 
    super()
  }

  ngOnInit() {}

}
