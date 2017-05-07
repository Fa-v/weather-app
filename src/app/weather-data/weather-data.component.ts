import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {WeatherService} from '../service/weather.service'
import {CurrentWeather} from '../currentWeather'

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  currentWeather: CurrentWeather;
  private location;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.currentWeather = this.weatherService.getCurrentWeather();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.location = position.coords;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.weatherService.getWeatherData(lat, lon).subscribe(
          (data) => {
        console.log(data)
             this.currentWeather = new CurrentWeather(
              data.name,
              data.sys.country, 
              data.main.temp,
              data.main.temp_min,
              data.main.temp_max,
              data.weather[0].description,
              data.weather[0].id
            )}
        );
      }
    )
  }

}
