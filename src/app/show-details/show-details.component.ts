import { Component,Input, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";

@Component({
  selector: "app-show-details", 
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {
  @Input() current: ICurrentShow;
  constructor() {}

  ngOnInit() {}
}
