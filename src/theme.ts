import {createTheme} from '@mui/material/styles'
import {darken, lighten} from '@mui/material'

export const makeTheme = ({fontSize = 14, spacing = 8}: {spacing?: number, fontSize?: number} = {}) => {
  const fontFamily = '"Open Sans", sans-serif'
  return createTheme({
    defaultColorScheme: 'light',
    cssVariables: {
      colorSchemeSelector: 'class',
    },
    shape: {
      borderRadius: 16,
    },
    spacing,
    colorSchemes: {
      light: {
        palette: {
          text: {
            primary: 'rgb(66, 69, 68)',
          },
          primary: {
            main: '#0071cd',
            light: lighten('#0b57d0', .5),
            dark: darken('#0b57d0', .5),
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#0b57d0',
            light: lighten('#0b57d0', .5),
            dark: darken('#0b57d0', .5),
            contrastText: '#FFFFFF',
          },
          // text: {
          //   primary: '#000000',
          //   secondary: '#333333',
          // },
          background: {
            // paper: '#fff',
            // default: 'rgb(246, 248, 252)',
            default: '#fff',
            paper: 'rgb(246, 248, 252)',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#1DE9B6',
            light: '#64FFDA',
            dark: '#00BFA5',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#56e0ff',
            light: '#9cedff',
            dark: '#00d2f8',
            contrastText: '#FFFFFF',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#94a3b8',
          },
          background: {
            default: darken('#031525', .4),
            paper: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
    },
    typography: {
      fontSize: fontSize,
      fontFamily,
    },
    components: {
      MuiTypography: {
        defaultProps: {
          component: 'div'
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 40,
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            overflow: 'visible',
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: t => ({
          '*, *::before, *::after': {
            // box-sizing: inherit;
            boxSizing: 'border-box',
          },
          '@font-face': {
            fontFamily: 'Material Icons',
            fontStyle: 'normal',
            fontWeight: 400,
            src: 'url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")',
          },
          '.material-icons': {
            fontFamily: 'Material Icons',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: 24,
            lineHeight: 1,
            letterSpacing: 'normal',
            textTransform: 'none',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            direction: 'ltr',
            WebkitFontFeatureSettings: '"liga"',
            WebkitFontSmoothing: 'antialiased',
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
          ':focus': {
            outline: 0,
          },
          body: {
            fontSize,
            margin: 0,
            padding: 0,
            background: 'background.default',
            // background: 'none',
            position: 'relative',
            zIndex: 4,
          },
          html: {
            fontSize: fontSize,
            fontFamily: '--font-ubuntu',
          },
        })
      }
    }
  })
}

export const defaultTheme = makeTheme()