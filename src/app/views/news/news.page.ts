import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
  searchKeyword: string = ""
  results: any

  constructor(private newsService: NewsService,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getNews();
  }

  private getNews() {
    this.ngxService.startLoader("loader-news");
    this.newsService.news().subscribe(res => {
      this.newsArray = res.data.news;
      this.results = this.newsArray;
      this.ngxService.stopLoader("loader-news");
    });
  }

  search(){
    if (this.searchKeyword === "") {
      this.results = [...this.newsArray]
      return
    }

    this.results = this.newsArray.filter(result => result.title.toLowerCase().includes(this.searchKeyword.toLowerCase()))
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getNews()
      event.target.complete();
    }, 2000);
  };
}
