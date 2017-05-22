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
   isLoading: boolean = false;
  
  private tempIsCelsius: boolean;
  private degreeBtnText: string;
  private location;

  constructor(private weatherService: WeatherService) {
    this.tempIsCelsius = true;
    this.degreeBtnText = 'Fahrenheit';
  }
 
 getWeatherData() {
    this.isLoading = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.location = position.coords;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.weatherService.getWeatherData(lat, lon).subscribe(
          (data) => {
            this.currentWeather = new CurrentWeather(
              data.name,
              data.sys.country,
              data.weather[0].description,
              data.weather[0].id,
              (data.main.temp).toFixed(0) + 'º C',
              (data.main.temp_min).toFixed(0) + 'º C',
              (data.main.temp_max).toFixed(0) + 'º C',
              data.main.temp.toFixed(0),
              data.main.temp_min.toFixed(0),
              data.main.temp_max.toFixed(0),
              ((data.main.temp * 9 / 5) + 32).toFixed(0),
              ((data.main.temp_min * 9 / 5) + 32).toFixed(0),
              ((data.main.temp_max * 9 / 5) + 32).toFixed(0),
            );
            this.isLoading = false;
          }, () => this.isLoading = false
         );
      }
    )
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
    /*this.isLoading = true;*/
    this.getWeatherData();
  }

}


/*import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { WeatherService } from '../service/weather.service'

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  isLoading: boolean = false;
  
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
    this.isLoading = true;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.location = position.coords;
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.weatherService.getWeatherData(lat, lon).subscribe(
          (data) => {
            console.log(data);
            this.city = data.name;
            this.country = data.sys.country;
            this.currentTemperature = (data.main.temp).toFixed(0) + 'º C';
            this.minTemperature = (data.main.temp_min).toFixed(0) + 'º C';
            this.maxTemperature = (data.main.temp_max).toFixed(0) + 'º C';
              this.currentCelsius = data.main.temp.toFixed(0);
              this.minCelsius = data.main.temp_min.toFixed(0);
              this.maxCelsius = data.main.temp_max.toFixed(0);
              this.currentFahrenheit = ((data.main.temp * 9 / 5) + 32).toFixed(0);
              this.minFahrenheit = ((data.main.temp_min * 9 / 5) + 32).toFixed(0);
              this.maxFahrenheit = ((data.main.temp_max * 9 / 5) + 32).toFixed(0);
              this.description = data.weather[0].description;
              this.icon = data.weather[0].id;
            this.isLoading = false;
          }, () => this.isLoading = false
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
*/

/*import { Component, OnInit, Input } from '@angular/core';
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
*/