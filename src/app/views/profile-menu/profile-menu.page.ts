import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.page.html',
  styleUrls: ['./profile-menu.page.scss'],
})
export class ProfileMenuPage extends CapacitorBase implements OnInit {

  constructor(private router: Router) { 
    super()
  }

  ngOnInit() {
    if(!this.mobile){
      //this.router.navigate(['/inicio'])
    }
  }

}
