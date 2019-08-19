import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShow } from '../icurrent-show';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


interface ICurrentShowData{
  show:{
    name: string, //Show Name
    genres:string, //This is an array
    runtime: number, //Runtime in minutes
    schedule: [{ time: number, days: string[] }], //eg., time:00:35 and days":[ "Monday","Tuesday", "Wednesday","Thursday"]
    // network: { 
    //   name : string //Network Name
    //   country: [{name: string , timezone: string}],
    //   image: {original:string},
    //   summary: string
    // }
  },
}

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient:HttpClient) { }

  getShowData(name:string){
    this.httpClient.get<ICurrentShowData>(
      `${environment.baseURL}api.tvmaze.com/search/shows?q=${name}`
    ).pipe(map(data => this.transformToICurrentShow(data)));
  }

  private transformToICurrentShow(data: ICurrentShowData): ICurrentShow {
    return {
      showName: data.show.name
      showGenre: data.show.genres,
      showRuntime: data.show.runtime,
     // showImage: `http://static.tvmaze.com/uploads/images/original_untouched/15/${data.show.network.image}.jpg`
     // showCountry: data.show.network[0].country.name,
      //showSummary: data.show.network[0].summary

    }
}
