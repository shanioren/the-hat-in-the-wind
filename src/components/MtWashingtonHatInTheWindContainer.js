import React, {Component} from 'react'
import moment from 'moment-timezone';

import WindSpeedService from '../services'
import HatInTheWind from './HatInTheWind'
import MtWashingtonConfiguration from '../MtWashingtonConfiguration'
import { WindSpeedUnits } from '../services/windModel'


const startTime = moment.tz('2018-03-19 00:00', MtWashingtonConfiguration.timezoneCode)
const endTime = moment.tz('2018-03-19 24:00', MtWashingtonConfiguration.timezoneCode)

class MtWashingtonHatInTheWindContainer extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      windData: null
    }
  }

  componentDidMount() {
    WindSpeedService.get(MtWashingtonConfiguration.geocode, startTime, endTime, 30, WindSpeedUnits.KNOTS)
      .then(windData => this.setState({
        isLoading: false,
        windData: windData
      }))
      .catch(() => this.setState({
        isLoading: false,
        windData: null
      }))
  }

  render() {
    const { windData } = this.state
      return (
        <HatInTheWind
          windData={windData}
          isLoading={this.state.isLoading}
          title="Mt. Washington, New Hampshire, USA on Mar-19th, 2018"/>
      )
  }
}

export default MtWashingtonHatInTheWindContainer
