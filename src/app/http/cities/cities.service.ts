import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CityInterface} from "../../interfaces/city.interface";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<CityInterface[]> {
    return this.httpClient.get('assets/json/cities.json').pipe(
      map((res: any | {data: CityInterface[]}) => {
        return res.data.map((item:CityInterface) => {
          return {...item, id: item.mtsbuCode, name: item.city}
        });
      })
    );
  }
}
