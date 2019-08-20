import { Component, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";
<<<<<<< HEAD
import { ShowsService } from '../shows/shows.service';
=======
>>>>>>> 0c857948b43d41ef2220a0187bdb3fcaaa53c448

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
  currentShow: ICurrentShow;
  constructor(private showsService: ShowsService) {

  }

  ngOnInit() {
    this.showsService.getShowData("girls").subscribe(data => (this.currentShow = data));
  }
}
