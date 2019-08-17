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
      showName: "",
      showGenre: "",
      network: "",
      airedTime: "",
      showImage: "",
      showSummary: "",
      showRuntime: 0,
      showCountry: ""
    };
  }

  ngOnInit() {}
}
