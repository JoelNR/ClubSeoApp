import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { ProfileModel } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends CapacitorBase implements OnInit {
  @ViewChild('selectPhotoInput') selectPhotoInput: ElementRef<HTMLInputElement>;
  profileModel: ProfileModel = null
  profilePictureSrc: string = '/assets/img/default-avatar.png'
  imageFile: File
  email: string
  telephone: string
  categoryOptions: string[] = ['Olímpico', 'Poleas', 'Desnudo','Tradicional', 'Longbow']
  
  competitionArray = [{name: 'IV Tirada de la Liga Atirca',date: '01/02/2022', position: 1, points: 120 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Campeonato de Canarias',date: '01/02/2022', position: 2, points: 220 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Campeonato el arcoiris',date: '01/02/2022', position: 3, points: 320 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 4, points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 5',date: '01/02/2022', position: 5, points: 520 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 6',date: '01/02/2022', position: 6 , points: 620 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},
  {name: 'Competición 4',date: '01/02/2022', position: 7, points: 420 , category: 'Arco olímpico', distance: 70 , type: 'Aire Libre'},]

  recordsArray = [{recordName : 'Recurvo senior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo senior', distance: 18 , type: 'Sala', points : 600, date: '01/01/2022'},
  {recordName : 'Recurvo Junior', distance: 70 , type: 'Aire Libre', points : 600, date: '01/01/2022'},]

  editableProfile: boolean = false
  editProfileActive: boolean = false

  formGroup: FormGroup
  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    super()
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      image:null
    })
    this.route.paramMap.subscribe(param => {
      if(param.get('id')== 'self'){
        this.profileApiEndpoint(localStorage.getItem('user_id'))
      } else {
        this.profileApiEndpoint(param.get('id'))
      }
    })
    
  }

  profileApiEndpoint(id: string){
    this.profileService.profile(id).subscribe(res => {
      this.profileModel = res.data.profile[0]
      this.email = res.data.email
      this.telephone = res.data.telephone
      if (localStorage.getItem('user_id') == this.profileModel.user_id){
        this.editableProfile = true
      }
    })
  }

  updateProfile(){
    const formData: any = new FormData()
    formData.append('image', this.formGroup.controls['image'].value)
    this.profileService.editProfile(this.profileModel.first_name, this.profileModel.last_name, this.profileModel.category, this.email, this.telephone, formData).
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
    const input = <HTMLInputElement>$event.target
    if (input.files?.length === 1) {
      this.formGroup.patchValue({
        image: input.files[0]
      })
    }
  }
}