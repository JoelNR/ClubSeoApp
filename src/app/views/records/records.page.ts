import { Component, OnInit } from '@angular/core';
import { extend } from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { Records } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage extends CapacitorBase implements OnInit {
  outdoorRecords: Records[] =[]
  indoorRecords: Records[] = []
  levelPassRecords: Records[] = []
  fullrecords: Records[] = []

  openIndoor: boolean = false
  openOutdoor: boolean = false
  openLevelPass: boolean = false

  filterInterface: boolean = false
  filtered: boolean = false

  userModality: string = 'Aire libre'
  modalityOptions: string[] = ['Sala', 'Aire libre', 'Pase de nivel']
  userCategory: string
  categoryOptions: string[] = ['olímpico', 'poleas', 'desnudo','tradicional', 'longbow']
  userDistance: string
  distanceOptions: string[]

  constructor(private competitionService: CompetitionService) { 
    super()
  }

  ngOnInit() {
    this.getRecords();
  }

  private getRecords() {
    this.competitionService.getClubRecords().subscribe(res => {
      this.fullrecords = res
      res.forEach(element => {
        if (element.modality == "Aire libre") {
          this.outdoorRecords.push(element);
        } else if (element.modality == 'Sala') {
          this.indoorRecords.push(element);
        } else {
          this.levelPassRecords.push(element);
        }
      });
    });
  }

  filter(){
    this.outdoorRecords = []
    this.indoorRecords = []
    this.levelPassRecords = []
    this.fullrecords.forEach(element => {
      console.log(this.userModality == element.modality)
      if (element.modality == "Aire libre") {
        if (this.userModality == element.modality  && this.userCategory == element.category && this.userDistance == element.distance.toString()){
          this.outdoorRecords.push(element);
        }
      } else if (element.modality == 'Sala') {
        if (this.userModality == element.modality  && this.userCategory == element.category && this.userDistance == element.distance.toString()){
          this.indoorRecords.push(element);
        }
      } else {
        if (this.userModality == element.modality  && this.userCategory == element.category && this.userDistance == element.distance.toString()){
          this.levelPassRecords.push(element);
        }
      }
    })
    this.filtered = true
  }

  reset(){
    this.outdoorRecords = []
    this.indoorRecords = []
    this.levelPassRecords = []
    this.filterInterface = false
    this.filtered = false
    this.getRecords()
  }

  changeCategory(event){
    this.userCategory = event.detail.value
    this.setDistancesOptions()
  }

  changeDistance(event){
    this.userDistance = event.detail.value
  }

  changeModality(event){
    this.userModality = event.detail.value
    this.setDistancesOptions()
  }

  setDistancesOptions(){
    if (this.userModality == 'Sala'){
      this.distanceOptions = ['18','14']
    } else {
      switch (this.userCategory){
        case 'olímpico': {
          this.distanceOptions = ['70', '60', '50', '40', '30', '24', '18']
          break;
        }
        case 'poleas': {
          this.distanceOptions = ['50', '40', '30', '24', '18']
          break;
        }
        case 'desnudo': {
          this.distanceOptions = ['50', '40', '30', '24', '18']
          break;
        }
        case 'tradicional': {
          this.distanceOptions = ['30', '24', '18']
          break;
        }
        case 'longbow': {
          this.distanceOptions = ['30', '24', '18']
          break;
        }
      }      
    }
  }
}
