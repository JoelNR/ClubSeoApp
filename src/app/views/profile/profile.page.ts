import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileCompetitions, ProfileModel, ProfileRecords } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends CapacitorBase implements OnInit {
  @ViewChild('selectPhotoInput') selectPhotoInput: ElementRef<HTMLInputElement>;
  profileModel: ProfileModel = null
  profileCompetitionsModel: ProfileCompetitions[]
  profileRecordsModel: ProfileRecords[]
  imageFile: File
  email: string
  telephone: string
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']

  recordsArray = [{recordName : 'Recurvo senior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance: 18 , type: 'Sala', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo Junior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},]

  editableProfile: boolean = false
  editProfileActive: boolean = false

  formGroup: FormGroup
  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ngxService: NgxUiLoaderService) {
    super()
  }

  ngOnInit() {
    this.getProfileData();
    
  }

  private getProfileData() {
    this.ngxService.startLoader('loader-profile');
    this.formGroup = this.formBuilder.group({
      image: null
    });
    this.route.paramMap.subscribe(param => {
      if (param.get('id') == 'self') {
        this.profileApiEndpoint(localStorage.getItem('user_id'))
        this.getProfileCompetitionEndpoint(localStorage.getItem('user_id'))
        this.getProfileRecordsEndpoint(localStorage.getItem('user_id'))
      } else {
        this.profileApiEndpoint(param.get('id'))
        this.getProfileCompetitionEndpoint(param.get('id'))
        this.getProfileRecordsEndpoint(param.get('id'))
      }
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getProfileData()
      event.target.complete();
    }, 2000);
  };

  profileApiEndpoint(id: string){
    this.profileService.profile(id).subscribe(res => {
      this.profileModel = res.data.profile
      this.email = res.data.email
      this.telephone = res.data.telephone
      if (localStorage.getItem('user_id') == this.profileModel.user_id){
        this.editableProfile = true
      }
      this.ngxService.stopLoader('loader-profile')
    })
  }

  getProfileCompetitionEndpoint(id: string){
    this.profileService.getProfileCompetition(id).subscribe(res =>{
      this.profileCompetitionsModel = res.data.competitions
    })
  }

  getProfileRecordsEndpoint(id: string){
    this.profileService.getProfileRecords(id).subscribe(res =>{
      this.profileRecordsModel = res.data.records
    })
  }

  updateProfile(){
    this.profileService.editProfile(this.profileModel.first_name, this.profileModel.last_name, this.profileModel.category, this.email, this.telephone).
    subscribe(res => {
      this.editProfileActive = false
    })
  }

  changeCategory(event){
    this.profileModel.category = event.detail.value
  }

  changePhoto(){
    this.selectPhotoInput.nativeElement.click();
  }

  updateProfilePicture($event: any){
    this.ngxService.startLoader('loader-profile-img')
    const input = <HTMLInputElement>$event.target
    if (input.files?.length === 1) {
      this.formGroup.patchValue({
        image: input.files[0]
      })
    }
    const headers = {
      'Accept': 'application/json',
      "ngrok-skip-browser-warning": "69420",
    }
    headers['Authorization'] = `${ProfileService.getToken()}`;
    const formData: FormData = new FormData()
    formData.append('image', this.formGroup.controls['image'].value)
    
    this.http.post<any>(this.profileService.getHost() + '/profile/photo/' + + localStorage.getItem('user_id'), formData, {
      headers: headers
      }).subscribe(res => {
        this.profileModel.image = res.data.image
        this.ngxService.stopLoader('loader-profile-img')
      })
  }
}