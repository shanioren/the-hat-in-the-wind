import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Preloader from './Preloader'
import WindLineChart from './WindLineChart'
import { WindDataType } from '../types'

const StyledWindLineChart = styled(WindLineChart)`
  margin: auto;
`

const HeaderContainer = styled.div`
  text-align: center;
`

const HatInTheWind = ({title, windData , isLoading}) => (
  <div>
    <HeaderContainer>
      <h1>Hat In The Wind</h1>
      { title && (
        <h2>{title}</h2>
      )}
    </HeaderContainer>

    { isLoading && (
      <Preloader centered/>
    )}

    { windData && (
      <StyledWindLineChart data={windData}/>
    )}

    { !isLoading && !windData && (
      <div>Wind Data Is Not Available</div>
    )}
  </div>
)

HatInTheWind.propTypes = {
  isLoading: PropTypes.bool,
  windData: WindDataType,
  title: PropTypes.string
}

HatInTheWind.defaultProps = {
  isLoading: false,
  windData: null,
  title: null
}

export default HatInTheWind;
