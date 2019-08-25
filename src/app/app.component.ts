import { Component } from '@angular/core';
import { ICurrentShow } from './icurrent-show';
import { ShowsService } from './shows/shows.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TvShows';

  currentShow: ICurrentShow;

  constructor (private showsService: ShowsService){}

  doSearch(searchValue) {
     const userInput = searchValue;
    // this.showsService.getShowData(userInput.length > 1 ? userInput: undefined).subscribe(data => this.currentShow = data);
    this.showsService.getShowData(userInput[0]).subscribe(data => this.currentShow = data);
   //console.log("dosearch :  " + this.showService.getShowData(userInput));
  }
}

