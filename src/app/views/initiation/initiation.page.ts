import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { InitiationModel } from 'src/app/models/initiation';
import { InitiationService } from 'src/app/services/initiation.service';
import * as dayjs from 'dayjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';


@Component({
  selector: 'app-initiation',
  templateUrl: './initiation.page.html',
  styleUrls: ['./initiation.page.scss'],
})
export class InitiationPage extends CapacitorBase implements OnInit {
  initiationDates: InitiationModel[]
  calendarYearArray: string [] = []
  calendarMonthArray: string [][] = []
  calendarBooleanArray: boolean [][] = []
  calendarDatesArray: string[][][] = []
  attendeeArrayValues: number [] = []

  userId: string
  dateValue: string
  capacity: number
  dateId: string
  morePersons: boolean = false
  attendees: number = null
  userHasDate: boolean = false

  constructor(private initiationService: InitiationService,
    private ngxService: NgxUiLoaderService, private router: Router) {
    super()
   }

  ngOnInit() {
    this.getInitationData();
  }

  private getInitationData() {
    this.ngxService.startLoader('loader-initiation');
    this.userId = localStorage.getItem('user_id');
    this.initiationService.getInitiation().subscribe(res => {
      if (res.data.userDate == null) {
        this.generateCalendarArray(res.data.initiationDates);
      } else {
        this.userHasDate = true;
        this.dateId = res.data.userDate.id;
        this.dateValue = res.data.userDate.date;
      }
      this.ngxService.stopLoader('loader-initiation');
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getInitationData()
      event.target.complete();
    }, 2000);
  };

  generateCalendarArray(array: InitiationModel[]){
    this.initiationDates = array
    this.calendarYearArray = []
    this.calendarMonthArray = []
    this.calendarBooleanArray = []
    this.calendarDatesArray = []
    let startIndex: number
    if(this.initiationDates == null){
      return
    }
    for (let index = 0; index < this.initiationDates.length; index++) {
      if(dayjs().isBefore(dayjs(this.initiationDates[index].date))){
        if(this.initiationDates[index].capacity > 0){
          const month = dayjs(this.initiationDates[index].date).format('MM')
          const year = dayjs(this.initiationDates[index].date).format('YYYY')
          this.calendarMonthArray.push([month])
          this.calendarBooleanArray.push([false])
          this.calendarYearArray.push(year)
          this.calendarDatesArray.push([[this.initiationDates[index].date]])
          startIndex = index + 1   
          index = this.initiationDates.length    
        }
      }
    }
    

    for (let index = startIndex; index < this.initiationDates.length; index++) {
      if(this.initiationDates[index].capacity > 0){
        const element = this.initiationDates[index];
        const month = dayjs(element.date).format('MM')
        const year = dayjs(element.date).format('YYYY')
        if(this.calendarYearArray[this.calendarYearArray.length-1].includes(year)){

          if(this.calendarMonthArray[this.calendarYearArray.length-1][this.calendarMonthArray[this.calendarYearArray.length-1].length-1].includes(month)){
            this.calendarDatesArray[this.calendarYearArray.length-1][this.calendarMonthArray[this.calendarYearArray.length-1].length-1].push(element.date)  
            
          } else {
            this.calendarMonthArray[this.calendarYearArray.length-1].push(month)
            this.calendarBooleanArray[this.calendarYearArray.length-1].push(false)
            this.calendarDatesArray[this.calendarYearArray.length-1].push([element.date])
          }
        } else {
          this.calendarYearArray.push(year)
          this.calendarMonthArray.push([month])
          this.calendarBooleanArray.push([false])
          this.calendarDatesArray.push([[element.date]])
        }        
      }
    }

    for (let index = 0; index <  this.calendarDatesArray.length; index++) {
      for (let i = 0; i < this.calendarDatesArray[index].length; i++) {
        for (let j = 0; j < this.calendarDatesArray[index][i].length; j++) {
          this.calendarDatesArray[index][i][j] = dayjs(this.calendarDatesArray[index][i][j]).format('DD')
        }
      }
    }
  }

  addUser(){
    this.initiationService.addUserToInitiation(this.dateId, this.attendees).subscribe(res => {
      this.userHasDate = true
    })
  }

  parseMonth(monthNumber: string){
    return dayjs(monthNumber).format('MMMM')
  }

  showCalendar(i: number, j: number){
    this.calendarBooleanArray[i][j] = !this.calendarBooleanArray[i][j]
  }

  getDate(date: any){
    this.dateValue = dayjs(date).format('YYYY-MM-DD')
    this.capacity = this.initiationDates.find(element => element.date === this.dateValue).capacity
    this.dateId = this.initiationDates.find(element => element.date === this.dateValue).id
    if(this.morePersons){
      this.showAttendee()
    }
  }

  revokeDate(){
    this.dateValue = null
    this.capacity = null
    this.dateId = null
  }

  parseDateFormat(date: string){
    return dayjs(date).format('DD/MM/YYYY')
  }

  showAttendee(){
    this.morePersons = true
    this.attendeeArrayValues = []
    for (let index = 0; index < this.capacity-1; index++) {
      this.attendeeArrayValues.push(index+1)
    }
  }

  addAttendee(event: any){
    this.attendees = event.target.value
  }
}
