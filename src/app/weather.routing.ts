import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { WeatherDataComponent } from './weather-data/weather-data.component';
import {ResolvingLocationService} from './services/resolving-location.service';

const WEATHER_ROUTER: Routes = [
  {path: '', component: WeatherDataComponent, resolve: {currentWeather:ResolvingLocationService}}
]

export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);