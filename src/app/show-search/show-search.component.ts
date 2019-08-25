import { Component, Output, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  @Output() searchEvent= new EventEmitter();

  search = new FormControl('',[Validators.minLength(3)]);

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string)=> {
      if(!this.search.invalid) {
        this.searchEvent.emit(searchValue);
      }
    })
  }

}
