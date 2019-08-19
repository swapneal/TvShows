import { Component, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";

@Component({
  selector: "app-show-details",
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})

export class ShowDetailsComponent implements OnInit {
  currentShow: ICurrentShow;
  constructor() {
    this.currentShow = {
      showName: "SHowName",
      showGenre: "genre",
      network: "network",
      airedTime: "atime",
      showImage: "image",
      showSummary: "sum",
      showRuntime: 0,
      showCountry: "country"
    };
  }

  ngOnInit() {}
}
