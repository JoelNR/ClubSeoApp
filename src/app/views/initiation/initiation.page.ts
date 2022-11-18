import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { InitiationService } from 'src/app/services/initiation.service';

@Component({
  selector: 'app-initiation',
  templateUrl: './initiation.page.html',
  styleUrls: ['./initiation.page.scss'],
})
export class InitiationPage extends CapacitorBase implements OnInit {

  constructor(private initiationService: InitiationService) {
    super()
   }

  id: string

  ngOnInit() {
    this.initiationService.getInitiation().subscribe(res =>{
      this.id = res.data.initationDates[0].id
    })
  }

  addUser(){
    this.initiationService.addUserToInitiation(this.id, 655484758).subscribe(res => {

    })
  }
}
