import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SheetModalComponent } from '../components/modals/sheet-modal/sheet-modal.component';
import { WebModalComponent } from '../components/modals/web-modal/web-modal.component';
import { CapacitorBase } from '../lib/CapacitorBase';

export interface Button { text: string, color: string, fill?: string, classes?: string, onClick: () => void };

@Injectable({
    providedIn: 'root'
})
export class ModalService extends CapacitorBase {


    constructor(private modalController: ModalController) {
        super()
    }


    async showModal(title: string, texts: string[], buttons: Button[], titleClass?: string) {
        if (this.mobile) {
            const modal = await this.modalController.create({
                component: SheetModalComponent,
                componentProps: {
                    title,
                    titleClass,
                    texts,
                    buttons
                },
                cssClass: ['sheet-modal'],
                initialBreakpoint: 1,
                breakpoints: [0, 1],
            });

            return await modal.present()
        } else {
            const modal = await this.modalController.create({
                component: WebModalComponent,
                componentProps: {
                    title,
                    titleClass,
                    texts,
                    buttons,
                },
                cssClass: ['web-modal'],
            });

            return await modal.present()
        }
    }

    dismiss() {
        this.modalController.dismiss({
            'dismissed': true
        });
    }
}