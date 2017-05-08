import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer'


@Injectable()
export class WeatherService {

  private location;

  constructor(private http: Http) { }

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
          .throw(error.json() || 'You need to allow geolocation');
      });
  }
}
