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
  openIndoor: boolean = false
  openOutdoor: boolean = false

  constructor(private competitionService: CompetitionService) { 
    super()
  }

  ngOnInit() {
    this.competitionService.getClubRecords().subscribe(res=>{
      
      res.forEach(element => {
        if (element.modality== "Aire Libre"){
          this.outdoorRecords.push(element)
        } else {
          this.indoorRecords.push(element)
        }
      });
    })
  }
}
