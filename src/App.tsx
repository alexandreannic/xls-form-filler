import {Box, CssBaseline, ThemeProvider} from '@mui/material'
import {XlsFormFiller} from './XlsFormFiller/XlsFormFiller.tsx'
import {defaultTheme} from './theme.ts'
import {surveyShort} from '../test/survey/surveyShort.ts'
import {useState} from 'react'
import {surveyMsme} from '../test/survey/surveyMsme.ts'

function App() {
  const [values, setValues] = useState<any>()
  return (
    <ThemeProvider defaultMode="light" theme={defaultTheme}>
      <CssBaseline enableColorScheme/>
      <Box sx={{maxWidth: 1000, minWidth: 1000, margin: '12px auto'}}>
        <Box sx={{display: 'flex'}}>
          <Box component="pre" sx={{minWidth: 400}}>
            <Box component="pre" sx={{width: 400, fontSize: '0.75em', maxHeight: '80vh', overflow: 'auto', position: 'fixed'}}>
              {(() => {
                try {
                  return JSON.stringify(values, null, 2)
                } catch (e) {
                  console.log('⚙️', values)
                  return e + ''
                }
              })()}
            </Box>
          </Box>
          <Box>
            <XlsFormFiller survey={surveyShort} onSubmit={_ => setValues(_)}/>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
