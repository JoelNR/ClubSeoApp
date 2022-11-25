import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { Button } from 'src/app/services/modal.service';

@Component({
  selector: 'app-web-modal',
  templateUrl: './web-modal.component.html',
  styleUrls: ['./web-modal.component.scss'],
})
export class WebModalComponent extends CapacitorBase implements OnInit {

  @Input() title: string = 'web-modal-title';
  @Input() texts: string[] = ["Web-modal text"];
  @Input() buttons: Button[];
  link: string = '/inicio'

  public oneButton: boolean = false;

  constructor(public modalController: ModalController) {
    super();
  }

  ngOnInit() {
    this.oneButton = this.buttons.length === 1
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
