import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WeatherService } from '../service/weather.service'

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  public city: string;
  public country: string;
  public description: string;
  public currentTemperature: any;
  public minTemperature: any;
  public maxTemperature: any;
  public currentCelsius: any;
  public minCelsius: any;
  public maxCelsius: any;
  public currentFahrenheit: any;
  public minFahrenheit: any;
  public maxFahrenheit: any;
  public icon: string;
  private tempIsCelsius: boolean;
  private degreeBtnText: string;
  private location;


  constructor(private weatherService: WeatherService) {
    this.tempIsCelsius = true;
    this.degreeBtnText = 'Fahrenheit';
  }

  currentWeather() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.location = position.coords;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.weatherService.getWeatherData(lat, lon).subscribe(
          (data) => {
            this.city = data.name,
              this.country = data.sys.country,
              this.currentTemperature = (data.main.temp).toFixed(0) + 'º C',
              this.minTemperature = (data.main.temp_min).toFixed(0) + 'º C',
              this.maxTemperature = (data.main.temp_max).toFixed(0) + 'º C',
              this.currentCelsius = data.main.temp.toFixed(0),
              this.minCelsius = data.main.temp_min.toFixed(0),
              this.maxCelsius = data.main.temp_max.toFixed(0),
              this.currentFahrenheit = ((data.main.temp * 9 / 5) + 32).toFixed(0),
              this.minFahrenheit = ((data.main.temp_min * 9 / 5) + 32).toFixed(0),
              this.maxFahrenheit = ((data.main.temp_max * 9 / 5) + 32).toFixed(0),
              this.description = data.weather[0].description,
              this.icon = data.weather[0].id
          }
        );
      }
    )
  }
  changeTemp(tempIsCelsius) {
    if (!this.tempIsCelsius) {
      this.tempIsCelsius = true;
      this.currentTemperature = this.currentCelsius + 'º C';
      this.minTemperature = this.minCelsius + 'º C';
      this.maxTemperature = this.maxCelsius + 'º C';
      this.degreeBtnText = 'Fahrenheit';
    } else {
      this.tempIsCelsius = false;
      this.currentTemperature = this.currentFahrenheit + 'º F';
      this.minTemperature = this.minFahrenheit + 'º F';
      this.maxTemperature = this.maxFahrenheit + 'º F';
      this.degreeBtnText = 'Celsius';
    }
  }

  ngOnInit() {
    this.currentWeather();
  }

}
