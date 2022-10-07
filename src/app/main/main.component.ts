import { Component, OnInit } from '@angular/core';
import {CitiesService} from "../http/cities/cities.service";
import {CityInterface} from "../interfaces/city.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public cities: CityInterface[] = [];
  public selectedCity!: CityInterface;

  constructor(private citiesService: CitiesService) { }

  public ngOnInit(): void {
    this.citiesService.get().subscribe(
      (res:CityInterface[]) => {
        this.cities = res
      }
    )
  }

  public selectCity(city: CityInterface) {
    this.selectedCity = city;
  }
}
