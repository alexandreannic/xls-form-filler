import {useState} from 'react'
import {Box, Button, Icon, Input, Typography, useTheme} from '@mui/material'
import {useXlsFormFillerContext} from '../XlsFormFiller.tsx'

export const QuestionLocation = ({
  value,
  onChange,
}: {
  value?: [number, number]
  onChange: (val: null | [number, number]) => void
}) => {
  const t = useTheme()
  const ctx = useXlsFormFillerContext()
  const [error, setError] = useState<string | null>(null)

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onChange([position.coords.latitude, position.coords.longitude])
        setError(null)
      },
      (err) => {
        setError(`Error: ${err.message}`)
        onChange(null)
      }
    )
  }

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleGetLocation}
        startIcon={<Icon>my_location</Icon>}
      >
        {ctx.labels.getMyLocation}
      </Button>

      {location && (
        <Box sx={{mt: 1, display: 'flex', alignItems: 'center'}}>
          <Input
            value={value?.[0]}
            sx={{mr: 1,}}
            startAdornment={<Box sx={{fontWeight: t.typography.fontWeightBold}}>Lat:&nbsp;</Box>}
            fullWidth
            type="number"
            disabled
          />
          <Input
            disabled
            startAdornment={<Box sx={{fontWeight: t.typography.fontWeightBold}}>Lon:&nbsp;</Box>}
            value={value?.[1]}
            fullWidth
            type="number"
          />
        </Box>
      )}

      {error && (
        <Box mt={2}>
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        </Box>
      )}
    </>
  )
}
