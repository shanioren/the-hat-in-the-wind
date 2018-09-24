const WindData = class  {
  constructor(windSpeed, observationTime) {
    this.windSpeed = {
      value: windSpeed,
      units: 'knots'
    }
    this.observationTime = observationTime
  }
}

export default WindData