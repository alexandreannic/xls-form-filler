import {CssBaseline, ThemeProvider} from '@mui/material'
import {XlsFormFiller} from './XlsFormFiller/XlsFormFiller.tsx'
import {defaultTheme} from './theme.ts'

function App() {
  return (
    <ThemeProvider defaultMode="light" theme={defaultTheme}>
      <CssBaseline enableColorScheme/>
      <XlsFormFiller/>
    </ThemeProvider>
  )
}

export default App
