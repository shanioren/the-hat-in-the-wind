const WindModel = class  {
  constructor(windSpeed, observationTime) {
    this.windSpeed = windSpeed,
    this.observationTime = observationTime
  }
}

const WindSpeedUnits = {
  MPH: 'mph',
  KNOTS: 'knots'
}

export {
  WindModel,
  WindSpeedUnits
}