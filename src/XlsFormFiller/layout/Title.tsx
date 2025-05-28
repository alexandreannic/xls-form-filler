import {Box, useTheme} from '@mui/material'
import {BoxProps} from '@mui/system'

export const Title = ({
  sx,
  ...props
}: BoxProps) => {
  const t = useTheme()
  return (
    <Box sx={{fontSize: '1.25em', fontWeight: t.typography.fontWeightBold, ...sx}} {...props}/>
  )
}