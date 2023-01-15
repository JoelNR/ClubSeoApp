import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  timerCounter: Subscription
  goToLineCountDownSetting: number = 10
  shootCountDownSetting: number = 12
  countDown: number = 10
  countDownStarted: boolean = false
  shootCountDownStarted: boolean = false

  constructor() { }

  ngOnInit() {
    
  }


  startClock(){
    if(!this.countDownStarted){
      this.reproduce()
      this.countDown++
      this.countDownStarted = true
      this.timerCounter = timer(0,1010).subscribe(res=>{
        this.countDown--
        if(this.countDown == 0){
          this.reproduce()
          if(!this.shootCountDownStarted){
            this.shootCountDownStarted = true
            this.countDown = this.shootCountDownSetting
          } else {
            this.countDown = this.goToLineCountDownSetting
            this.timerCounter.unsubscribe() 
            this.countDownStarted = false
          }
          
        }
      })      
    }
  }
  reproduce() {
    const audio = new Audio('/assets/audio/buzzer-bell.wav')
    audio.play()
  }
}
