import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { WeatherDataComponent } from './weather-data/weather-data.component';

const WEATHER_ROUTER: Routes = [
  {path: '', component: WeatherDataComponent}
]

export const weatherRouting: ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);