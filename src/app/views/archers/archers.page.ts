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
  alreadyArcher: boolean = false

  constructor(private profileService: ProfileService,
    private ngxService: NgxUiLoaderService) {
    super()
   }

  ngOnInit() {
    this.getArchersData();
  }
  private getArchersData() {
    this.ngxService.startLoader('loader-archers');
    this.profileService.getAllMembers().subscribe(res => {
      this.profileModels = res.data.profiles;
      this.alreadyArcher = this.profileModels.some(profile => profile.user_id == localStorage.getItem('user_id'))
      this.ngxService.stopLoader('loader-archers');
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getArchersData()
      event.target.complete();
    }, 2000);
  };
}
