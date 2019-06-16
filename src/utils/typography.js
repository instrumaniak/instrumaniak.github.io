import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: 'cornflowerblue'
  },
  'a:hover': {
    color: 'darkturquoise'
  },
  'hr': {
    background: '#eee'
  }
})

const typography = new Typography(altonTheme)

export default typography
