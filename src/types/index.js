import PropTypes from "prop-types";

const WindDataType = PropTypes.arrayOf(PropTypes.shape({
  windSpeed: PropTypes.shape({
    value: PropTypes.number.isRequired,
    units: PropTypes.string.isRequired
  }),
  observationTime: PropTypes.shape({
    format: PropTypes.func
  })
}))

const ThemeType = PropTypes.shape({
  colors: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired
  })
})

export {
  WindDataType,
  ThemeType
}