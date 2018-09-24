import React from 'react';
import { withTheme } from 'styled-components'

import { BounceLoader } from 'react-spinners'
import { ThemeType } from '../types'

const className = (centered) => `
  ${centered && `margin: auto;`} 
`

const Preloader = ({ theme, centered }) => (
  <BounceLoader className={className(centered)} color={theme.colors.primary}/>
)

Preloader.propTypes = {
  theme: ThemeType.isRequired,
}

export default withTheme(Preloader)