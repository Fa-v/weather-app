import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer'

import {CurrentWeather} from '../currentWeather'

@Injectable()
export class WeatherService {
  currentWeather: CurrentWeather = new CurrentWeather('Madrid', 'Es', 30, 12, 35, 'clearSky');
  constructor(private http: Http) { }

  getCurrentWeather() {
    return this.currentWeather;
  }

  getWeatherData(lat: number, lon: number) {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json'
      })
    });

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=5f50473f405094e8eb7a9a5121ca9733`, options)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => {
        return Observable
          .throw(error.json() || 'Error de servidor');
      });
  }
}
