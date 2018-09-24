import React from 'react'
import map from 'lodash/map'
import { withTheme } from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts'

import { ThemeType, WindDataType } from '../types'
import WindSpeedService from '../services'


const WindLineChart = ({className, data, theme}) => {
  let formattedWindData = map(data, function (item) {
    return {
      time: item.observationTime.format('HH:mm'),
      wind: item.windSpeed.value
    }
  })
  let units = data[0].windSpeed.units
  let windBlowsHatSpeed = WindSpeedService.getHatBlowsInWindSpeed(units)

  return(
  <LineChart className={className} width={600} height={300} data={formattedWindData}>
    <XAxis dataKey="time"/>
    <YAxis/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend/>
    <ReferenceLine y={windBlowsHatSpeed} label="Hat blows" stroke={theme.colors.secondary}/>
    <Line type="monotone" dataKey="wind" stroke={theme.colors.primary} name={`Wind Speed (${units})`}/>
  </LineChart>
)}

WindLineChart.propTypes = {
  theme: ThemeType.isRequired,
  windData: WindDataType
}

WindLineChart.defaultProps = {
  className: ''
}

export default withTheme(WindLineChart)



