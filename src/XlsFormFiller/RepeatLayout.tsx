import {Box, useTheme} from '@mui/material'
import {ReactNode} from 'react'

export const RepeatLayout = ({
  children,
  index
}: {
  children: ReactNode
  index: number
}) => {
  const t = useTheme()
  return (
    <Box sx={{position: 'relative', p: 1, mb: 1, boxShadow: t.shadows[1], borderRadius: t.shape.borderRadius + 'px'}}>
      <Box sx={{
        color: t.palette.info.contrastText,
        position: 'absolute',
        fontSize: '0.75em',
        fontWeight: t.typography.fontWeightBold,
        top: t.spacing(1),
        right: t.spacing(1),
        borderRadius: 50,
        background: t.palette.info.main,
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >{index}</Box>
      {children}
    </Box>
  )
}