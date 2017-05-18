import { Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { CurrentWeather } from '../currentWeather';


@Injectable()
export class WeatherService {
  @Input() currentWeather: CurrentWeather;
  public location;

  constructor(private http: Http) { }

  getWeatherData() {
    var options = new RequestOptions({
      headers: new Headers({
        'Accept': 'application/json'
      })
    });
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = position.coords;
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=5f50473f405094e8eb7a9a5121ca9733`, options)
            .map((response: Response) =>
              response.json())
            .toPromise()
            .then(
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
                ((data.main.temp_max * 9 / 5) + 32).toFixed(0)),
                                
                res(this.currentWeather);
              }
            );
        });
    });
  }
}  
