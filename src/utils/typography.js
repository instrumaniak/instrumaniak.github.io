import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  body: {
    color: '#333'
  },
  a: {
    color: '#5f6f8c'
  },
  'a:hover': {
    color: 'steelblue'
  },
  'hr': {
    background: '#eee'
  }
})

const typography = new Typography(altonTheme)

export default typography
