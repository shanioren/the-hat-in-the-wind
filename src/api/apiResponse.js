const ApiResponse = class  {
  constructor(lat, lon, windSpeed, observationTime) {
    this.lat = lat
    this.lon = lon
    this.windSpeed = windSpeed
    this.observationTime = observationTime
  }

  toJson = () => ({
    lat: this.lat,
    lon: this.lon,
    wind_speed: {value: this.windSpeed, units: 'knots'},
    observation_time: {value: this.observationTime}
  })

  static fromJson = (json) =>
    new ApiResponse(json.lat, json.lon, json.wind_speed.value, json.observation_time.value)

}

export default ApiResponse