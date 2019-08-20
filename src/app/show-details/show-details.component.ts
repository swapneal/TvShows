import { Component, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";
import {ShowService} from '../shows/shows.service';
@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
  currentShow: ICurrentShow;
  constructor() {
    
  }

  ngOnInit() {
    this.showService("girls").subscribe(data => (this.currentShow = data));
  }
}
