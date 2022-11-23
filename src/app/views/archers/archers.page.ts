import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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

  constructor(private profileService: ProfileService,
    private ngxService: NgxUiLoaderService) {
    super()
   }

  ngOnInit() {
    this.ngxService.startLoader('loader-archers')
    this.profileService.getAllMembers().subscribe(res => {
      this.profileModels = res.data.profiles
      this.ngxService.stopLoader('loader-archers')
    })
  }
}
