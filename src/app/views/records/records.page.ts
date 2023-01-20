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
  indoorRecords: Records[]
  outdoorRecords: Records[]
  openIndoor: boolean = false
  openOutdoor: boolean = false

  constructor(private competitionService: CompetitionService) { 
    super()
  }

  ngOnInit() {
    this.competitionService.getClubRecords().subscribe(res=>{
      this.outdoorRecords = res.data.outdoor_records
      this.indoorRecords = res.data.indoor_records
    })
  }

  handleRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  };
}
