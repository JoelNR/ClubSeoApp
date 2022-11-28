import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CapacitorBase } from 'src/app/lib/CapacitorBase';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage extends CapacitorBase implements OnInit {

  newsModel: News

  constructor(private newsService: NewsService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService) { 
    super()
  }

  ngOnInit() {
    this.getNewsData();

  }



  private getNewsData() {
    this.ngxService.startLoader('loader-news-details');
    this.route.paramMap.subscribe(param => {
      this.newsService.getNewsById(param.get('id')).subscribe(res => {
        this.newsModel = res.data.news;
      });
      this.ngxService.stopLoader('loader-news-details');
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getNewsData()
      event.target.complete();
    }, 2000);
  };

}
