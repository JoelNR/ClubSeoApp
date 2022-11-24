import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { InitiationModel } from 'src/app/models/initiation';
import { InitiationService } from 'src/app/services/initiation.service';
import * as dayjs from 'dayjs';


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

  map = new Map<string, string>()

  constructor(private initiationService: InitiationService) {
    super()
   }

  ngOnInit() {
    this.initiationService.getInitiation().subscribe(res =>{
      this.generateCalendarArray(res.data.initiationDates)
    })
  }

  generateCalendarArray(array: InitiationModel[]){
    this.initiationDates = array
    const month = dayjs(this.initiationDates[0].date).format('MM')
    const year = dayjs(this.initiationDates[0].date).format('YYYY')
    this.calendarMonthArray.push([month])
    this.calendarBooleanArray.push([false])
    this.calendarYearArray.push(year)
    this.calendarDatesArray.push([[this.initiationDates[0].date]])

    for (let index = 1; index < this.initiationDates.length; index++) {
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

    for (let index = 0; index <  this.calendarDatesArray.length; index++) {
      for (let i = 0; i < this.calendarDatesArray[index].length; i++) {
        for (let j = 0; j < this.calendarDatesArray[index][i].length; j++) {
          this.calendarDatesArray[index][i][j] = dayjs(this.calendarDatesArray[index][i][j]).format('DD')
        }
      }
    }
  }

  addUser(){
  }

  parseMonth(monthNumber: string){
    return dayjs(monthNumber).format('MMMM')
  }

  showCalendar(i: number, j: number){
    this.calendarBooleanArray[i][j] = !this.calendarBooleanArray[i][j]
  }
}
