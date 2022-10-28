import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent extends CapacitorBase implements OnInit {
  @Input() link: string
  @Input() locationBack: boolean = false

  constructor(private location: Location) {
    super()
   }

  ngOnInit() {}

  navigateBack(){
    if(this.locationBack){
      this.location.back()
    } 
  }
}
