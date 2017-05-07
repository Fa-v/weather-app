export class CurrentWeather {
  constructor(
    public city: string,
    public country: string,
    public currentTemperature: any,
    public minTemperature: any,
    public maxTemperature: any,
    public description: string,
    public icon: string,
  ) {
    
  }
}