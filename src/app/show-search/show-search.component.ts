import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShowsService } from '../shows/shows.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  search = new FormControl('',[Validators.minLength(3)]);

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.search.valueChanges.subscribe((searchValue: string)=> {
      if(!this.search.invalid) {
        const userInput = searchValue;
        this.showsService.getShowData(userInput.length>1 ? userInput[1]: undefined).subscribe(data=>console.log(data));
      }
    })
  }

}
