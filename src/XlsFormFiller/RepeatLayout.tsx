import {Box, useTheme} from '@mui/material'
import {ReactNode} from 'react'
import {Title} from './Title.tsx'

export const RepeatLayout = ({
  children,
  index,
  hint,
  label,
}: {
  hint?: string,
  label?: string
  children: ReactNode
  index: number
}) => {
  const t = useTheme()
  return (
    <Box sx={{position: 'relative', p: 1, mb: 1, boxShadow: t.shadows[1], borderRadius: t.shape.borderRadius + 'px'}}>
      <Title sx={{mb: 1}}>{label}</Title>
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