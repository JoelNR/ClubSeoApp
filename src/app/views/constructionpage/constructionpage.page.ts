import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-constructionpage',
  templateUrl: './constructionpage.page.html',
  styleUrls: ['./constructionpage.page.scss'],
})
export class ConstructionpagePage extends CapacitorBase implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
