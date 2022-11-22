import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileModel } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-archers',
  templateUrl: './archers.page.html',
  styleUrls: ['./archers.page.scss'],
})
export class ArchersPage extends CapacitorBase implements OnInit {

  profileModels: ProfileModel[]

  constructor(private profileService: ProfileService) {
    super()
   }

  ngOnInit() {
    this.profileService.getAllMembers().subscribe(res => {
      this.profileModels = res.data.profiles
    })
  }
}
