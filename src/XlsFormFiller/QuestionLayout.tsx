import {ReactNode} from 'react'
import {Box, useTheme} from '@mui/material'

export const QuestionLayout = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => {
  const t = useTheme()
  return (
    <Box sx={{
      borderRadius: t.shape.borderRadius + 'px',
      background: t.palette.background.paper,
      p: 2,
      mb: .5,
      '&:not(:first-of-type)': {
        borderTopLeftRadius: '2px',
        borderTopRightRadius: '2px',
      },
      '&:not(:last-of-type)': {
        borderBottomLeftRadius: '2px',
        borderBottomRightRadius: '2px',
      }
    }}>
      <Box sx={{fontWeight: t.typography.fontWeightBold, mb: 1}}>{label}</Box>
      {children}
    </Box>
  )
}