import React from 'react'
import map from 'lodash/map'
import { withTheme } from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ReferenceLine } from 'recharts'

import { ThemeType, WindDataType } from '../types'


const WindBlowsHatSpeed = 5

const WindLineChart = ({className, data, theme}) => {

  let formattedWindData = map(data, function (item) {
    return {
      time: item.observationTime.format('HH:mm'),
      wind: item.windSpeed.value
    }
  })

  return(
  <LineChart className={className} width={600} height={300} data={formattedWindData}>
    <XAxis dataKey="time"/>
    <YAxis>
      <Label value="Wind Speed (knots)" angle={-90} />
    </YAxis>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend/>
     <ReferenceLine y={WindBlowsHatSpeed} label="Hat blows" stroke={theme.colors.secondary}/>
    <Line type="monotone" dataKey="wind" stroke={theme.colors.primary}/>
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


