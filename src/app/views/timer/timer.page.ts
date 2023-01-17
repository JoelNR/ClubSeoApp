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
  shootCountDownSetting: number =5
  countDown: number = 10
  userInput: string = '12'

  countDownStarted: boolean = false
  shootCountDownStarted: boolean = false
  countDownStopped: boolean = false
  dobleTurn: boolean = false

  audioOptions: any[] = [{name: 'Silbato', file: '/assets/audio/blowing-whistle.mp3'},
  {name: 'Zumbador', file: '/assets/audio/buzzer-bell.wav'},
  {name: 'Censura', file: '/assets/audio/censorship-beep.wav'},
  {name: 'Campanilla', file: '/assets/audio/chime.wav'},
  {name: 'Sonido digital', file: '/assets/audio/digital-quick-tone.wav'},
  {name: 'Pelota de futbol', file: '/assets/audio/hitting-soccer-ball.wav'},
  ]

  audioFinishOptions: any[] = [{name: 'España', file: '/assets/audio/Himno-Espana-Track.mp3'},
  ]

  selectedAudioOption: any
  selectedFinishAudioOption: any

  constructor() { }

  ngOnInit() {
    this.selectedAudioOption = this.audioOptions[0]
    this.selectedFinishAudioOption = this.audioFinishOptions[0]
  }


  startClock(){
    if(!this.countDownStarted){
      this.reproduce(this.selectedAudioOption)
      this.countDownStopped = false
      this.countDown++
      this.countDownStarted = true
      this.timerCounter = timer(0,1010).subscribe(res=>{
        this.countDown--
        if(this.countDown == 0){
          
          if(!this.shootCountDownStarted){
            this.reproduce(this.selectedAudioOption)
            this.shootCountDownStarted = true
            this.countDown = this.shootCountDownSetting
          } else {
            this.reproduce(this.selectedFinishAudioOption)
            this.countDown = this.goToLineCountDownSetting
            this.timerCounter.unsubscribe() 
            this.countDownStarted = false
            this.shootCountDownStarted = false
          }
          
        }
      })      
    } else {
      this.timerCounter.unsubscribe()
      this.countDownStopped = true
      this.countDownStarted = false
    }
  }
  reproduce(audioOption: any) {
    const audio = new Audio(audioOption.file)
    audio.play()
  }
  changeAudio($event: any){
    this.selectedAudioOption = $event.detail.value
  }

  changeTime(){
    this.shootCountDownSetting = Number(this.userInput)
    if(this.countDownStarted){
      this.timerCounter.unsubscribe()    
      this.countDownStarted = false
      this.shootCountDownStarted = false 
      this.countDownStopped = false
      this.countDown = this.goToLineCountDownSetting
    }
  }
}
