import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { HttpClient } from '@angular/common/http';
import * as dayjs from 'dayjs';
import { GetWeatherApiResponse, WeatherModel, WeatherModelUnits } from 'src/app/models/weather';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage extends CapacitorBase implements OnInit {

  newsArray: News[] = []

  weatherModel: WeatherModel
  weatherUnits: WeatherModelUnits
  selectedTime: string
  weatherCondition: string
  weatherIndex: number = 0
  windDirection: string
  progress: number = 0
  userLogged: boolean = false
  isMember: boolean = false

  constructor(private newsService: NewsService,
    private http: HttpClient,
    private toastController: ToastController) { 
    super()
  }

  ngOnInit() {
    setInterval(() => {
      if(this.progress <= 0,9){
         this.progress += 0.01;
      }
    }, 50)
    this.getNews()
    this.getWeather(dayjs().format('YYYY-MM-DD'))
    this.cookiesInform()
  }

  private getNews() {

    this.newsService.news().subscribe(res => {
      this.newsArray = res
    });
  }

  async cookiesInform(){
    if(localStorage.getItem('cookies-toast') != 'true'){
      const toast = await this.toastController.create({
        message: 'Utilizamos cookies únicamente funcionales, tú actividad no quedará registrada por nosotros.',
        duration: 10000,
        position: 'bottom',
        buttons: [
          {
            text: 'Ocultar',
            role: 'cancel',
          }
        ]
      });
      localStorage.setItem('cookies-toast','true')
      await toast.present();      
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getNews()
      event.target.complete();
    }, 2000);
  };

  getWeather(date: string){
    const headers = {
      'Accept': 'application/json',
    }
    this.http.get<GetWeatherApiResponse>('https://api.open-meteo.com/v1/forecast?latitude=28.0712&longitude=-15.4672&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,cloudcover,windspeed_10m,winddirection_10m,windgusts_10m&start_date='
    + date + 
    '&end_date=' + date
    , {
      headers: headers
      }).subscribe(res => {

        this.weatherModel = res.hourly
        this.weatherUnits = res.hourly_units

        this.treatWeatherData();
        
      })
  }

  private treatWeatherData() {
    this.weatherModel.apparent_temperature = this.weatherModel.apparent_temperature.slice(9, 22);
    this.weatherModel.precipitation = this.weatherModel.precipitation.slice(9, 22);
    this.weatherModel.relativehumidity_2m = this.weatherModel.relativehumidity_2m.slice(9, 22);
    this.weatherModel.weathercode = this.weatherModel.weathercode.slice(9, 22);
    this.weatherModel.temperature_2m = this.weatherModel.temperature_2m.slice(9, 22);
    this.weatherModel.time = this.weatherModel.time.slice(9, 22);
    this.weatherModel.cloudcover = this.weatherModel.cloudcover.slice(9, 22);
    this.weatherModel.winddirection_10m = this.weatherModel.winddirection_10m.slice(9, 22);
    this.weatherModel.windgusts_10m = this.weatherModel.windgusts_10m.slice(9, 22);
    this.weatherModel.windspeed_10m = this.weatherModel.windspeed_10m.slice(9, 22);

    for (let index = 0; index < this.weatherModel.time.length; index++) {
      this.weatherModel.time[index] = this.weatherModel.time[index].split('T')[1];
    }
    this.selectedTime = this.weatherModel.time[8];
    this.parseWeatherCode(this.weatherModel.weathercode[8])
    this.parseWindDirection(this.weatherModel.winddirection_10m[8])
  }

  changeTime(event:any){
    this.selectedTime = event.target.value
    for (let index = 0; index < this.weatherModel.time.length; index++) {
      if ( this.weatherModel.time[index] == this.selectedTime){
        this.weatherIndex = index
        this.parseWeatherCode(this.weatherModel.weathercode[index])
        this.parseWindDirection(this.weatherModel.winddirection_10m[index])
        return
      }
    }
  }

  parseWeatherCode(apiCode: number){
    const weatherCode = [{code: 0, description: 'Cielos claros'},
    {code: 1, description: 'Principalmente claro'},
    {code: 2, description: 'Parcialmente nublado'},
    {code: 3, description: 'Nublado'},
    {code: 45, description: 'Niebla'},
    {code: 48, description: 'Niebla'},
    {code: 51, description: 'Llovizna ligera'},
    {code: 53, description: 'Llovizna moderada'},
    {code: 55, description: 'Llovizna intensa'},
    {code: 56, description: 'Llovizna helada ligera'},
    {code: 57, description: 'Llovizna helada intensa'},
    {code: 61, description: 'Lluvia ligera'},
    {code: 63, description: 'Lluvia moderada'},
    {code: 65, description: 'Lluvia intensa'},
    {code: 66, description: 'Lluvia helada ligera'},
    {code: 67, description: 'Lluvia helada intensa'},
    {code: 71, description: 'Nevada ligera'},
    {code: 73, description: 'Nevada moderada'},
    {code: 75, description: 'Nevada intensa'},
    {code: 77, description: 'Granizo'},
    {code: 80, description: 'Chubascos ligeros'},
    {code: 81, description: 'Chubascos moderados'},
    {code: 82, description: 'Chubascos violentos'},
    {code: 85, description: 'Nieve'},
    {code: 86, description: 'Nieve'},
    {code: 95, description: 'Tormeta eléctrica'},
    {code: 96, description: 'Tormeta eléctrica con granizo ligero'},
    {code: 99, description: 'Tormeta eléctrica con granizo intenso'},]

    weatherCode.forEach(element => {
      if (element.code === apiCode){
        this.weatherCondition = element.description
        return
      }
    });
  }

  parseWindDirection(grades: number){
    const directionCode = ['Norte','Nornoroeste','Noreste','Estenoreste','Este','Estesudeste','Sudeste','Sudsudeste',
    'Sur','Sursudoeste','Sudoeste','Oestesudoeste','Oeste','Oestenoroeste','Noroeste','Nornoroeste','Norte']

    this.windDirection =directionCode[Math.round(grades/22.5)] 
  }
}
