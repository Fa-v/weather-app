import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';

import {WeatherService} from './services/weather.service';
import {ResolvingLocationService} from './services/resolving-location.service';
/*import {weatherRouting} from './weather.routing';*/


@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent,
    HeaderComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    /*weatherRouting*/
  ],
  providers: [WeatherService/*, ResolvingLocationService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
