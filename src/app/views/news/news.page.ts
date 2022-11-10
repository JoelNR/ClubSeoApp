import { Component, OnInit } from '@angular/core';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage extends CapacitorBase implements OnInit {

  newsArray: News[] = []
  public searchValue: string;

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
      res.data.news.forEach(newNews => {
        this.newsArray.push(newNews)
      });
      res.data.news.forEach(newNews => {
        this.newsArray.push(newNews)
      });
      res.data.news.forEach(newNews => {
        this.newsArray.push(newNews)
      });
    })
  }

  search(){

  }
}
