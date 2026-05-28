import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { CompetitionModel } from 'src/app/models/competition';
import { CompetitionService } from 'src/app/services/competition.service';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.page.html',
  styleUrls: ['./competitions.page.scss'],
})
export class CompetitionsPage extends CapacitorBase implements OnInit {
  @ViewChild('searchbar', { static: false }) searchbar!: IonSearchbar;

  competitionArray: CompetitionModel[] = []
  pastCompetitionArray: CompetitionModel[] = []
  searchKeyword: string = ""
  results: any = []
  pastResults: any = []

  constructor(private competitionService: CompetitionService,) { 
    super()
  }

  ngOnInit() {
    this.getCompetitionData();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Focus searchbar when '/' is pressed, unless user is typing in an input/textarea
    const activeElement = document.activeElement;
    const isInputActive = activeElement && (
      activeElement.tagName === 'INPUT' || 
      activeElement.tagName === 'TEXTAREA' || 
      (activeElement as HTMLElement).isContentEditable
    );

    if (event.key === '/' && !isInputActive) {
      event.preventDefault();
      if (this.searchbar) {
        this.searchbar.setFocus();
      }
    }
  }

  private getCompetitionData() {
    this.competitionService.competition().subscribe(res => {
      this.competitionArray = res
      let pastIndex = this.competitionArray.findIndex(competition =>  dayjs(competition.date).isBefore(dayjs()))  
      console.log(pastIndex)
      if(pastIndex == -1){
        this.results =this.competitionArray
      } else {
        this.results = this.competitionArray.slice(0,pastIndex)
        this.pastCompetitionArray = this.competitionArray.slice(pastIndex)
      } 
           
      this.pastResults = this.pastCompetitionArray
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.competitionArray]
      this.pastResults = [...this.pastCompetitionArray]
      return
    }

    this.results = this.competitionArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
    this.pastResults = this.pastCompetitionArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getCompetitionData()
      event.target.complete();
    }, 2000);
  };
}

