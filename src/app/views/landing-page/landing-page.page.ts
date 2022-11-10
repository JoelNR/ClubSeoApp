import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage extends CapacitorBase implements OnInit {

  newsArray: News[] = []

  constructor(private newsService: NewsService) { 
    super()
  }

  ngOnInit() {
    this.newsService.news().subscribe(res =>{
      res.data.news.forEach(newNews => {
        this.newsArray.push(newNews)
      });
      res.data.news.forEach(newNews => {
        this.newsArray.push(newNews)
      });
    })
  }

}
