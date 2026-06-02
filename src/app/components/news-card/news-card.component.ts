import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent extends CapacitorBase implements OnInit {
  @Input() id!: string;
  @Input() imgSrc!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() description!: string;

  @ViewChild('newsDialog') dialogRef!: ElementRef<HTMLDialogElement>;

  constructor() {
    super();
  }

  ngOnInit() {}

  openDialog(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.dialogRef) {
      this.dialogRef.nativeElement.showModal();
    }
  }

  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.nativeElement.close();
    }
  }

  onDialogClick(event: MouseEvent) {
    const dialog = this.dialogRef.nativeElement;
    if (event.target !== dialog) {
      return;
    }

    const rect = dialog.getBoundingClientRect();
    const isDialogContent = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );

    if (!isDialogContent) {
      dialog.close();
    }
  }
}


