export class CurrentWeather {
  constructor(
    public city: string,
    public country: string,
    public description: string,
    public icon: string,
    public currentTemperature: any,
    public minTemperature: any,
    public maxTemperature: any,
    public currentCelsius: any,
    public minCelsius: any,
    public maxCelsius: any,
    public currentFahrenheit: any,
    public minFahrenheit: any,
    public maxFahrenheit: any,
    
  ) {

  }
}