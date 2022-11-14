import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Button } from 'src/app/services/modal.service';


@Component({
  selector: 'app-sheet-modal',
  templateUrl: './sheet-modal.component.html',
  styleUrls: ['./sheet-modal.component.scss'],
})
export class SheetModalComponent implements OnInit {

  @Input() title: string = 'sheet-modal-title';
  @Input() texts: string[] = ["Sheet-modal text"];
  @Input() buttons: Button[];

  public oneButton: boolean = false;

  constructor(public modalController: ModalController) {  }

  ngOnInit() {
    this.oneButton = this.buttons.length === 1
  }


}
