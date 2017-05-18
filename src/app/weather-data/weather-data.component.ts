import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { WeatherService } from '../services/weather.service'
import { CurrentWeather } from '../currentWeather';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;
  
  private tempIsCelsius: boolean;
  private degreeBtnText: string;
  private location;


  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
    this.tempIsCelsius = true;
    this.degreeBtnText = 'Fahrenheit';
  }
 
  changeTemp(tempIsCelsius) {
    if (!this.tempIsCelsius) {
      this.tempIsCelsius = true;
      this.currentWeather.currentTemperature = this.currentWeather.currentCelsius + 'º C';
      this.currentWeather.minTemperature = this.currentWeather.minCelsius + 'º C';
      this.currentWeather.maxTemperature = this.currentWeather.maxCelsius + 'º C';
      this.degreeBtnText = 'Fahrenheit';
    } else {
      this.tempIsCelsius = false;
      this.currentWeather.currentTemperature = this.currentWeather.currentFahrenheit + 'º F';
      this.currentWeather.minTemperature = this.currentWeather.minFahrenheit + 'º F';
      this.currentWeather.maxTemperature = this.currentWeather.maxFahrenheit + 'º F';
      this.degreeBtnText = 'Celsius';
    }
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { currentWeather: CurrentWeather }) => {
        this.currentWeather = data.currentWeather;
      }
    )
  }

}
